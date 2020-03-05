<template>
  <div class="u-productAdd">
    <h1 class="u-title">
      <span class="u-index">1</span>商品基本信息
    </h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name" size="small" style="width: 400px" placeholder="商品标题组成：商品描述+规格"></el-input>
      </el-form-item>
      <el-form-item label="商品品牌">
        <el-input v-model="form.brand" size="small" style="width: 400px" placeholder="请填写品牌"></el-input>
      </el-form-item>
      <el-form-item label="商品产地">
        <el-input v-model="form.address" size="small" style="width: 400px" placeholder="请填写产地"></el-input>
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
      <el-form-item label="商品轮播">
        <el-upload
          action="/pet/uploadFile"
          list-type="picture-card"
          :on-preview="handleBannerPreview"
          :on-remove="handleBannerRemove"
          :on-success="handleBannerSuccess"
          :file-list="fileList"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
    </el-form>

    <h1 class="u-title">
      <span class="u-index">2</span>商品规格与库存
    </h1>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品规格">
        <div v-show="specs.length" class="u-specs__tip">最多添加两个商品规格</div>
        <div class="u-specs__item">
          <div class="u-specs__header">
            <el-select v-model="specs[0].type" size="small" placeholder="规格1">
              <el-option
                v-for="item in specsList"
                :key="item.type"
                :label="item.name"
                :value="item.type"
              >
              </el-option>
            </el-select>
            <el-button type="text" size="small">删除规格</el-button>
          </div>
        </div>
        <el-button v-show="specs.length < 2" icon="el-icon-plus" size="small">添加规格</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const specsList = [
  { type: 'taste', name: '口味' },
  { type: 'weight', name: '重量' },
  { type: 'color', name: '颜色' },
  { type: 'size', name: '尺寸' },
  { type: 'type', name: '型号' },
  { type: 'style', name: '款式' },
  { type: 'material', name: '材质' },
  { type: 'group', name: '适用群体' },
  { type: 'volume', name: '容量' },
  { type: 'scent', name: '香型' },
  { type: 'meal', name: '套餐' }
]
export default {
  data() {
    return {
      specsList,
      form: {},
      specs: [
        { type: '', name: '', val: [] }
      ],
      dialogVisible: false,
      dialogImageUrl: '',
      fileList: []
    }
  },
  // 拦截确认
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.$confirm('此操作将停止商品编辑, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        next()
      })
      .catch(() => {
        next(false)
      })
  },
  methods: {
    handleBannerSuccess(res, file, fileList) {
      file.url = res.data
      this.fileList = fileList
    },
    handleBannerRemove(file, fileList) {
      this.fileList = fileList
    },
    handleBannerPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.u-productAdd {
  width: 1040px;
  padding: 20px;
  border: 1px solid #ccc;
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
}
</style>
