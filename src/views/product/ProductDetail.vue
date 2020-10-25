<template>
  <div class="u-page__product p-2" v-loading="loading">
    <div class="u-productAdd">
      <h1 class="u-title">
        <span class="u-index">1</span>商品基本信息
      </h1>
      <el-form ref="ruleForm" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="商品名称" prop="name">
          <el-input
            v-model="form.name"
            size="small"
            style="width: 400px"
            placeholder="商品标题组成：商品描述+规格"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品品牌">
          <el-input v-model="form.brand" size="small" style="width: 400px" placeholder="请填写品牌"></el-input>
        </el-form-item>
        <el-form-item label="商品产地">
          <el-input v-model="form.address" size="small" style="width: 400px" placeholder="请填写产地"></el-input>
        </el-form-item>
        <el-form-item label="适用对象" prop="petType">
          <el-select v-model="form.petType" clearable placeholder="请选择" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品分类" prop="categoryId">
          <el-select v-model="form.categoryId" clearable placeholder="请选择" size="small">
            <el-option
              v-for="item in categoryOptions"
              :key="item.id"
              :label="item.categoryName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上架状态">
          <el-switch v-model="form.onOff"></el-switch>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input
            v-model="form.detail"
            rows="5"
            type="textarea"
            style="width: 400px"
            placeholder="建议300字以内，未填写讲根据商品标题自动生成"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品轮播" prop="productImgUrl">
          <el-upload
            accept="image/*"
            list-type="picture-card"
            multiple
            :action="uploadUrl"
            :on-preview="handleImagePreview"
            :on-remove="handleBannerRemove"
            :on-success="handleBannerSuccess"
            :file-list="fileList"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
          <div class="u-tip">请至少上传一张轮播图片，推荐尺寸400*400</div>
        </el-form-item>
        <el-form-item label="商品详情" prop="productDetailImgUrl">
          <el-upload
            accept="image/*"
            list-type="picture-card"
            multiple
            :before-upload="handleBeforeUpload"
            :action="uploadUrl"
            :on-preview="handleImagePreview"
            :on-remove="handleDetailRemove"
            :on-success="handleDetailSuccess"
            :file-list="detailFileList"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
          <div class="u-tip">请至少上传一张详情图，推荐尺寸750*X</div>
        </el-form-item>
      </el-form>

      <h1 class="u-title">
        <span class="u-index">2</span>商品规格与库存
      </h1>

      <el-form ref="form" label-width="80px">
        <el-form-item label="商品规格">
          <div v-show="specs.length" class="u-specs__tip">最多添加两个商品规格</div>
          <div v-for="(sp, index) in specs" :key="index" class="u-specs__item">
            <div class="u-specs__header">
              <el-select
                v-model="sp.type"
                size="small"
                :placeholder="`规格${index + 1}`"
                @change="handleTypeChagne(sp, $event)"
              >
                <el-option
                  v-for="item in getOptions(index)"
                  :key="item.type"
                  :label="item.name"
                  :value="item.type"
                ></el-option>
              </el-select>
              <el-button type="text" size="small" @click="deleteSpecs(index)">删除规格</el-button>
            </div>
            <div v-if="sp.type" class="u-enum">
              <div class="u-enum__list">
                <el-tag
                  v-for="x in sp.val"
                  :key="x"
                  class="u-enum__item"
                  closable
                  :disable-transitions="false"
                  type="info"
                  @close="handleEnumClose(sp, x)"
                >{{ x }}</el-tag>
              </div>
              <div>
                <el-input v-model.trim="sp.enum" size="mini" style="width: 100px"></el-input>
                <el-button type="text" size="mini" @click="handleAddEnum(sp)">添加</el-button>
              </div>
            </div>
          </div>
          <el-button
            v-show="specs.length < 2"
            icon="el-icon-plus"
            size="small"
            @click="addSpecs"
          >添加规格</el-button>
        </el-form-item>
      </el-form>

      <h1 class="u-title">
        <span class="u-index">3</span>价格及库存
      </h1>

      <el-table :data="skuList" style="width: 100%">
        <!-- 单规格 -->
        <template v-if="effectSpecs.length === 1">
          <el-table-column :label="specs[0].name" width="100">
            <template slot-scope="{row}">
              <span>{{ row.specs[0] && row.specs[0].value }}</span>
            </template>
          </el-table-column>
        </template>
        <!-- 双规格 -->
        <template v-if="effectSpecs.length === 2">
          <el-table-column :label="specs[0].name" width="100">
            <template slot-scope="{row}">
              <span>{{ row.specs[0] && row.specs[0].value }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="specs[1].name" width="100">
            <template slot-scope="{row}">
              <span>{{ row.specs[1] && row.specs[1].value }}</span>
            </template>
          </el-table-column>
        </template>
        <el-table-column label-class-name="u-require" label="sku条形码" width="200">
          <template slot-scope="{row}">
            <div class="flex align-center">
              <el-input v-model="row.skuCode" size="small" placeholder="请输入商品自编码"></el-input>
              <el-button
                v-if="!row.skuCode"
                class="ml-1"
                type="text"
                size="mini"
                @click="fillSkuEmpty(row)"
              >无商品</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column label-class-name="u-require" label="sku名称" width="180">
          <template slot-scope="{row}">
            <div class="flex align-center justify-center">
              <el-input v-model="row.skuName" size="small" placeholder="请输入"></el-input>
              <el-button class="ml-1" type="text" size="mini" @click="fillSkuName(row)">填充</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="sku原价" width="150" align="center">
          <template slot-scope="{row}">
            <g-number v-model="row.originPrice"></g-number>
          </template>
        </el-table-column>
        <el-table-column label="sku进货价" width="150" align="center">
          <template slot-scope="{row}">
            <g-number v-model="row.supplyPrice"></g-number>
          </template>
        </el-table-column>
        <el-table-column label-class-name="u-require" label="sku价格" width="150" align="center">
          <template slot-scope="{row}">
            <g-number v-model="row.price"></g-number>
          </template>
        </el-table-column>
        <el-table-column label-class-name="u-require" label="sku库存" width="150" align="center">
          <template slot-scope="{row}">
            <el-input-number
              v-model="row.stock"
              controls-position="right"
              :min="0"
              :max="99999"
              size="small"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="商品类型" width="120" align="center">
          <template slot-scope="{row}">
            <el-select v-model="row.hotFlag" placeholder="请选择">
              <el-option
                v-for="item in hotFlagOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label-class-name="u-require"
          label="sku小图(400x400)"
          min-width="200"
          align="center"
        >
          <template slot-scope="{row}">
            <el-upload
              accept="image/*"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="handleSmallSuccess.bind(this, row)"
              :before-upload="handleBeforeUpload"
            >
              <el-button v-if="!row.skuImgUrl" type="primary" size="mini">
                上传图片
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
              <el-image
                v-else
                style="width: 50px; height: 50px"
                :src="row.skuImgUrl | fmtWebp"
                fit="fill"
                lazy
                webp
              />
            </el-upload>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="u-submit">
      <el-button
        :loading="submitLoading"
        type="primary"
        @click="handleSubmit"
      >{{ isEdit ? '更新商品': '提交发布' }}</el-button>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import store from 'store'
import productApi from '@/api/product'
import GNumber from '@/components/GNumber'

const specsList = [
  { type: 'weight', name: '重量' },
  { type: 'shap', name: '形状' },
  { type: 'size', name: '尺寸' },
  { type: 'package', name: '套餐' },
  { type: 'taste', name: '口味' },
  { type: 'color', name: '颜色' }
  // { type: 'type', name: '型号' },
  // { type: 'style', name: '款式' },
  // { type: 'material', name: '材质' },
  // { type: 'group', name: '适用群体' },
  // { type: 'volume', name: '容量' },
  // { type: 'scent', name: '香型' },
  // { type: 'meal', name: '套餐' }
]
const specsMap = {}
specsList.forEach(item => {
  specsMap[item.type] = item
})

const genSku = function () {
  return {
    skuCode: '',
    skuName: '',
    skuImgUrl: '',
    skuDetailImgUrl: '',
    originPrice: '',
    supplyPrice: '',
    price: '',
    stock: '',
    specs: null
  }
}
export default {
  name: 'ProductDetail',
  components: {
    GNumber
  },
  props: {
    isEdit: Boolean
  },
  data() {
    var validateBanner = (rule, value, callback) => {
      if (!_.get(value, 'length')) {
        callback(new Error('至少上传一张图片'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      submitLoading: false,
      enum1: '',
      enum2: '',
      specsList,
      specsMap,
      form: {
        categoryId: '',
        petType: '',
        name: '',
        brand: '',
        address: '',
        detail: '',
        onOff: true,
        productImgUrl: [],
        productDetailImgUrl: []
      },
      specs: [],
      skuList: [],
      dialogVisible: false,
      dialogImageUrl: '',
      fileList: [],
      detailFileList: [],
      options: [
        { label: '通用', value: 0 },
        { label: '狗狗', value: 1 },
        { label: '猫咪', value: 2 }
      ],
      hotFlagOptions: [
        {
          value: 0,
          label: '普通'
        },
        {
          value: 1,
          label: '新品'
        },
        {
          value: 2,
          label: '折扣'
        }
      ],
      categoryOptions: [],
      rules: {
        categoryId: {
          required: true,
          message: '请选择商品分类',
          trigger: 'change'
        },
        petType: {
          required: true,
          message: '请选择适用对象',
          trigger: 'change'
        },
        name: { required: true, message: '请输入名称', trigger: 'blur' }
      }
    }
  },
  computed: {
    effectSpecs() {
      return this.specs.filter(item => !!item.val.length)
    }
  },
  watch: {
    // productDetailImgUrl
    detailFileList(val) {
      this.form.productDetailImgUrl = val.map(item => {
        return {
          imgUrl: this.url2Webp(item.url)
        }
      })
      this.$nextTick(() => {
        this.$refs.ruleForm.validateField('productDetailImgUrl')
      })
    },
    fileList(val) {
      this.form.productImgUrl = val.map(item => {
        return {
          imgUrl: this.url2Webp(item.url)
        }
      })
      this.$nextTick(() => {
        this.$refs.ruleForm.validateField('productImgUrl')
      })
    }
  },
  mounted() {
    this.init()
    this.genSku()
    this.queryProductCategory()
  },
  // 拦截确认
  beforeRouteLeave(to, from, next) {
    next()
  },
  methods: {
    handleBeforeUpload(file) {
      const isLt5M = file.size / 1024 / 1024 < 0.5

      if (!isLt5M) {
        this.$message.error('上传头像图片大小不能超过 5MB!')
      }
      return isLt5M
    },
    init() {
      if (this.isEdit) {
        // 编辑商品
        this.tempRoute = Object.assign({}, this.$route)
        this.setTagsViewTitle()
        this.setPageTitle()
        this.queryProductFullInfoById()
      } else {
        // 新增商品
      }
    },
    fillSkuName(row) {
      row.skuName =
        this.form.name + (row.specs && row.specs.length && row.specs.map(v => v.value).join(' '))
    },
    // 空商品填充
    fillSkuEmpty(sku) {
      sku.skuCode = 'empty_' + this.uuid()
      sku.skuName =
        this.form.name + (sku.specs && sku.specs.length && sku.specs.map(v => v.value).join(' '))
      sku.skuImgUrl = ''
      sku.price = 9999
      sku.originPrice = 9999
      sku.supplyPrice = 9999
      sku.stock = 0
      sku.hotFlag = 0
    },
    setTagsViewTitle() {
      const title = '商品编辑'
      const route = Object.assign({}, this.tempRoute, {
        title: `${title}-${this.$route.params.productId}`
      })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = '商品编辑'
      document.title = `${title} - ${this.$route.params.productId}`
    },
    queryProductFullInfoById() {
      this.loading = true
      productApi
        .queryProductFullInfoById({
          productId: this.$route.params.productId
        })
        .then(res => {
          const data = res.data
          store.set('product_edit', data)
          this.recoverData(data)
          this.loading = false
        })
    },
    recoverData(data) {
      const { product, productSkuList, productBannerImgList, productDetailImgList } = data
      this.form = {
        categoryId: product.categoryId,
        petType: product.petType,
        name: product.name,
        brand: product.brand,
        address: product.address,
        detail: product.detail,
        onOff: product.onOff === 0,
        productImgUrl: [],
        productDetailImgUrl: []
      }
      this.specs = product.specs || []
      this.skuList = productSkuList
      this.fileList = productBannerImgList.map(item => {
        return {
          uid: item.id || item.imgUrl,
          url: this.url2Webp(item.imgUrl)
        }
      })
      this.detailFileList = productDetailImgList.map(item => {
        return {
          uid: item.id || item.imgUrl,
          url: this.url2Webp(item.imgUrl)
        }
      })
    },
    handleSubmit() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.checkSku()
            .then(() => {
              const params = this.genParams()
              if (this.submitLoading) {
                return
              }
              this.submitLoading = true
              if (this.isEdit) {
                productApi
                  .updateProduct(params)
                  .then(() => {
                    this.$notify({
                      title: '成功',
                      message: '更新商品成功',
                      type: 'success'
                    })
                    this.submitLoading = false
                    this.$store.dispatch('tagsView/delView', this.$route)
                    this.$router.push('/product/list')
                  })
                  .catch(err => {
                    this.submitLoading = false
                    this.$message.error(err.message)
                  })
              } else {
                productApi
                  .insertProduct(params)
                  .then(() => {
                    this.$notify({
                      title: '成功',
                      message: '新增商品成功',
                      type: 'success'
                    })
                    this.submitLoading = false
                    this.$store.dispatch('tagsView/delView', this.$route)
                    this.$router.push('/product/list')
                  })
                  .catch(err => {
                    this.submitLoading = false
                    this.$message.error(err.message)
                  })
              }
            })
            .catch(err => {
              this.$message.error(err.message)
            })
        } else {
          return false
        }
      })
    },
    // 生成提交参数
    genParams() {
      const params = {
        ...this.form,
        onOff: this.form.onOff ? 0 : 1,
        specList: this.specs
          .filter(item => !!_.get(item, 'val.length'))
          .map(item => ({ name: item.name, type: item.type, val: item.val })),
        skuInfoList: this.skuList
      }
      if (this.isEdit) {
        const historyData = store.get('product_edit')
        const { product } = historyData
        params.id = product.id
        params.productId = product.productId
      }
      return params
    },
    // 检测sku是否符合规范
    checkSku() {
      return new Promise((resolve, reject) => {
        const skuList = this.skuList
        // sku可为空，后续补充
        if (!skuList.length) {
          return resolve()
        }
        // sku不为空则做校验
        for (let i = 0; i < skuList.length; i++) {
          const sku = skuList[i]
          if (
            sku.skuCode === '' ||
            sku.skuName === '' ||
            // sku.skuImgUrl === '' ||
            sku.price === '' ||
            sku.stock === ''
          ) {
            reject(new Error(`第${i + 1}个商品内容存在空情况，请补充完整`))
            return
          }
        }
        resolve()
      })
    },
    handleSmallSuccess(row, res, file) {
      row.skuImgUrl = res.data
    },
    queryProductCategory() {
      productApi.queryProductCategory().then(res => {
        this.categoryOptions = res.data || []
      })
    },
    getOptions(index) {
      const x = index === 0 ? 1 : 0
      const exist = this.specs[x]
      if (exist && exist.type) {
        return this.specsList.filter(item => item.type !== exist.type)
      }
      return this.specsList
    },
    // 规格发生改变，规格数发生改变，都需要刷新Sku
    genSku() {
      const specs = this.specs.filter(item => !!item.val.length)
      const skuList = []
      if (specs.length === 0) {
        skuList.push(genSku())
      }
      if (specs.length === 1) {
        specs[0].val.forEach(v => {
          const s = {
            type: specs[0].type,
            name: specs[0].name,
            value: v
          }
          const sku = genSku()
          sku.specs = [s]
          skuList.push(sku)
        })
      }
      if (specs.length === 2) {
        specs[0].val.forEach(v => {
          const s1 = {
            type: specs[0].type,
            name: specs[0].name,
            value: v
          }
          specs[1].val.forEach(v2 => {
            const s2 = {
              type: specs[1].type,
              name: specs[1].name,
              value: v2
            }
            const sku = genSku()
            sku.specs = [s1, s2]
            skuList.push(sku)
          })
        })
      }
      // TODO: 原数据填充
      skuList.forEach(sku => {
        this.skuList.forEach(oldSku => {
          if (this.isSameSpeces(sku.specs || [], oldSku.specs || [])) {
            Object.assign(sku, oldSku)
          }
        })
      })
      this.skuList = skuList
    },
    // 判断老sku规格是否和最新的一样
    isSameSpeces(specs, oldSpecs) {
      if (oldSpecs.length !== specs.length) {
        return false
      }
      const diff = _.differenceWith(specs, oldSpecs, (a, b) => {
        return a.type === b.type && a.value === b.value
      })
      return diff.length === 0
    },
    handleEnumClose(specs, val) {
      specs.val = specs.val.filter(i => i !== val)
      this.genSku()
    },
    handleAddEnum(specs) {
      if (!specs.enum) return
      specs.val = _.uniq([...specs.val, specs.enum])
      specs.enum = ''
      this.genSku()
    },
    handleTypeChagne(a, b) {
      a.name = this.specsMap[b].name
    },
    addSpecs() {
      this.specs.push({ type: '', name: '', val: [], enum: '' })
    },
    deleteSpecs(index) {
      this.specs.splice(index, 1)
      this.genSku()
    },
    handleBannerSuccess(res, file, fileList) {
      file.url = res.data
      this.fileList = fileList
    },
    handleBannerRemove(file, fileList) {
      this.fileList = fileList
    },
    handleDetailSuccess(res, file, fileList) {
      file.url = res.data
      this.detailFileList = fileList
    },
    handleDetailRemove(file, fileList) {
      this.detailFileList = fileList
    },
    handleImagePreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.u-page__product {
  padding-bottom: 400px;
}
.u-productAdd {
  min-width: 1000px;
  max-width: 1400px;
  padding: 20px;
  border: 1px solid #eee;
}
.u-title {
  font-size: 16px;
  font-weight: 500;
}
.u-index {
  margin-right: 5px;
  font-size: 30px;
  color: #409eff;
}
.u-tip {
  color: #999;
}
.u-specs {
  &__tip {
    color: #999;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    background: #f4f5f9;
  }
  &__item {
    margin-bottom: 10px;
  }
}
.u-enum {
  padding: 20px;
  background: #fbfbfb;
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__item {
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
.u-submit {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: 1px 1px 2px 2px #eee;
  background: #fff;
}
</style>
<style lang="less">
.u-productAdd {
  .u-require.cell {
    &::before {
      content: '*';
      color: red;
    }
  }
}
// .el-upload--picture-card {
//   width: 100px;
//   height: 100px;
//   line-height: 102px;
// }
// .el-upload-list--picture-card .el-upload-list__item {
//   width: 100px;
//   height: 100px;
//   line-height: 102px;
// }
</style>
