<template>
  <div class="u-userCenter">
    <div class="u-header"></div>
    <div class="u-body p-2">
      <h3>我的店铺</h3>
      <div class="u-store">
        <div
          class="u-store__item"
          v-for="item in storeList"
          :key="item.id"
          @click="setCurrentStore(item)"
        >
          <img class="u-store__logo" :src="item.logo" alt />
          <div class="u-store__name">{{ item.storeName }}</div>
          <el-tag class="u-store__status" type="success" v-if="item.storeState === 0">营业中</el-tag>
          <el-tag class="u-store__status" type="info" v-else>休息中</el-tag>
          <i class="el-icon-edit-outline" @click.stop="doUpdate(item)"></i>
        </div>

        <div class="u-store__item align-center justify-center" @click="doAdd">
          <i class="el-icon-plus font-weight-bold"></i>
        </div>
      </div>
    </div>

    <!-- 添加/编辑店铺 -->
    <el-dialog width="800px" :title="editText" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="120px" size="small">
        <el-form-item v-loading="uploadLoading" label="LOGO">
          <el-image
            v-if="form.logo"
            style="width: 100px; height: 100px"
            :src="form.logo | fmtWebp"
            fit="fill"
            lazy
            :preview-src-list="[form.logo]"
          />
          <div>
            <el-upload
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="handleUploadSuccess"
              :before-upload="beforeUpload"
            >
              <el-button type="primary" size="mini">
                上传图片
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="门店名称">
          <el-input v-model.trim="form.storeName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model.trim="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="小程序二维码">
          <el-input v-model.trim="form.qrCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-cascader
            v-model="form.addressList"
            style="width: 250px"
            :options="dateOptions"
            placeholder="请选择地址"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="地址详情">
          <el-input v-model.trim="form.detail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="经度">
          <el-input v-model.trim="form.lon" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="纬度">
          <el-input v-model.trim="form.lat" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工作时间">
          <el-input v-model.trim="form.workTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业状态">
          <el-radio-group v-model="form.storeState">
            <el-radio :label="0">营业</el-radio>
            <el-radio :label="1">休息</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="doSubmitAdd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import storeApi from '@/api/store'
import { regionData, CodeToText, TextToCode } from 'element-china-area-data'
import { array } from 'jszip/lib/support'
export default {
  data() {
    return {
      dateOptions: regionData,
      storeList: [],
      dialogFormVisible: false,
      uploadLoading: false,
      form: {
        storeName: '',
        lon: '',
        lat: '',
        mobile: '',
        logo: '',
        workTime: '',
        storeState: 0,
        addressList: []
      }
    }
  },
  computed: {
    editText() {
      return this.form.id ? '编辑门店' : '新增门店'
    }
  },
  created() {
    this.load()
  },
  methods: {
    setCurrentStore(store) {
      this.$store.dispatch('store/setCurrentStore', store)
      this.$router.push('/')
    },
    load() {
      storeApi
        .queryStore({
          pageNo: 1,
          pageSize: 999
        })
        .then(res => {
          this.storeList = res.data
        })
        .finally(() => {})
    },
    handleUploadSuccess(res, file) {
      this.uploadLoading = false
      this.form.logo = res.data
    },
    beforeUpload() {
      this.uploadLoading = true
      return true
    },
    doAdd() {
      this.form = {
        id: '',
        storeName: '',
        lon: '',
        lat: '',
        mobile: '',
        logo: '',
        workTime: '',
        storeState: 0
      }
      this.dialogFormVisible = true
    },
    doUpdate(row) {
      const addressList = [
        _.get(TextToCode, `[${row.province}].code`),
        _.get(TextToCode, `[${row.province}][${row.city}].code`),
        _.get(TextToCode, `[${row.province}][${row.city}][${row.area}].code`)
      ]
      this.form = { ...row, addressList }
      this.dialogFormVisible = true
    },
    doSubmitAdd() {
      this.form.province = CodeToText[this.form.addressList[0]]
      this.form.city = CodeToText[this.form.addressList[1]]
      this.form.area = CodeToText[this.form.addressList[2]]
      storeApi
        .saveOrUpdateStore(this.form)
        .then(() => {
          this.dialogFormVisible = false
          if (this.form.id) {
            this.$message.success('修改成功')
          } else {
            this.$message('添加成功')
          }
          this.load()
        })
        .catch(() => {})
    }
  }
}
</script>

<style lang="less" scoped>
.u-userCenter {
  background: #f7f7fa;
  min-height: 100vh;
  .u-header {
    height: 240px;
    background-image: url('../../assets/user-center-bg.png');
    background-size: 100% 100%;
  }
  .u-store {
    display: flex;
    align-items: center;
    .el-icon-plus {
      font-size: 50px;
      color: #ccc;
    }
    &__item {
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 176px;
      height: 200px;
      padding: 30px 10px;
      margin-right: 20px;
      margin-bottom: 20px;
      border-radius: 20px;
      background: #fff;
      &:hover {
        .el-icon-edit-outline {
          display: block;
        }
      }
    }
    &__logo {
      width: 70px;
      height: 70px;
      border-radius: 70px;
    }
    &__name {
      font-weight: 700;
      font-size: 14px;
      color: #4b4b4d;
      margin-top: 16px;
    }
    &__status {
      margin-top: 16px;
    }
    .el-icon-edit-outline {
      display: none;
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 20px;
    }
  }
}
</style>
