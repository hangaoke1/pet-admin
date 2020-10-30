<template>
  <div class="p-2">
    <div class="bg-bai p-3">
      <g-filter class="pb-1" :options="options" @refresh="handleRefresh" @search="handleSearch">
        <el-button class="yc-del" size="small" slot="left" @click="doAdd">添加门店</el-button>
      </g-filter>
      <el-table
        class="mt-1"
        size="small"
        :data="list"
        style="width: 100%"
        stripe
        v-loading="loading"
      >
        <el-table-column prop="logo" align="center" label="LOGO">
          <template slot-scope="scope">
            <el-avatar :src="scope.row.logo"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="storeName" align="center" label="门店名称"></el-table-column>
        <el-table-column prop="mobile" align="center" label="联系电话"></el-table-column>
        <el-table-column prop="lon" align="center" label="经度"></el-table-column>
        <el-table-column prop="lat" align="center" label="纬度"></el-table-column>
        <el-table-column fixed="workTime" align="center" label="工作时间" width="200"></el-table-column>
        <el-table-column prop="storeState" align="center" label="营业状态">
          <template slot-scope="scope">
            <el-tag size="medium" type="success" v-if="scope.row.storeState === 0">营业</el-tag>
            <el-tag size="medium" type="info" v-else>休息</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="storeState" align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button class="yc-edit" size="small" @click="doUpdate(scope.row)">编辑</el-button>
            <el-button class="yc-del" size="small" @click="doDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="text-right p-1">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.pageNo"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="page.pageSize"
          :pager-count="5"
          :total="page.total"
          background
          layout="total, sizes, prev, pager, next, jumper"
        ></el-pagination>
      </div>

      <el-dialog :title="editText" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item v-loading="uploadLoading" label="LOGO" :label-width="formLabelWidth">
            <el-image
              v-if="form.logo"
              style="width: 100px; height: 100px"
              :src="form.logo | fmtWebp"
              fit="fill"
              lazy
              webp
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
          <el-form-item label="门店名称" :label-width="formLabelWidth">
            <el-input v-model.trim="form.storeName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model.trim="form.mobile" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="经度" :label-width="formLabelWidth">
            <el-input v-model.trim="form.lon" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="纬度" :label-width="formLabelWidth">
            <el-input v-model.trim="form.lat" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作时间" :label-width="formLabelWidth">
            <el-input v-model.trim="form.workTime" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="营业状态" :label-width="formLabelWidth">
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
  </div>
</template>

<script>
import filterOptions from './filter-options'
import GFilter from '@/components/GFilter'
import storeApi from '@/api/store'

export default {
  name: 'Store',
  components: {
    GFilter
  },
  data() {
    return {
      options: filterOptions,
      listQuery: {},
      page: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      list: [],
      loading: false,
      formLabelWidth: '120px',
      dialogFormVisible: false,
      uploadLoading: false,
      form: {
        storeName: '',
        lon: '',
        lat: '',
        mobile: '',
        logo: '',
        workTime: '',
        storeState: 0
      }
    }
  },
  computed: {
    editText() {
      return this.form.id ? '编辑门店' : '新增门店'
    }
  },
  activated() {
    this.load()
  },
  methods: {
    handleUploadSuccess(res, file) {
      this.uploadLoading = false
      this.form.logo = res.data
    },
    beforeUpload() {
      this.uploadLoading = true
      return true
    },
    // 新建
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
      this.form = { ...row }
      this.dialogFormVisible = true
    },
    doSubmitAdd() {
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
    },
    doDelete(row) {
      this.$message('暂不支持')
    },
    handleSearch(form) {
      this.listQuery = form
      this.page.pageNo = 1
      this.load()
    },
    handleRefresh(form) {
      this.listQuery = form
      this.page.pageNo = 1
      this.load()
    },
    load() {
      this.loading = true
      storeApi
        .queryStore({
          pageNo: this.page.pageNo,
          pageSize: this.page.pageSize
        })
        .then(res => {
          this.list = res.data
          this.page.total = res.data.length
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    handleSizeChange(v) {
      this.page.pageSize = v
      this.page.pageNo = 1
      this.load()
    },
    handleCurrentChange(v) {
      this.page.pageNo = v
      this.load()
    }
  }
}
</script>

<style lang="less" scoped></style>
