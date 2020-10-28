<template>
  <div class="p-2">
    <div class="bg-bai p-3">
      <g-filter class="pb-1" :options="options" @refresh="handleRefresh" @search="handleSearch">
        <el-button slot="left" size="small" @click="doAdd">添加分类</el-button>
      </g-filter>
      <el-table size="small" class="mt-1" :data="list" style="width: 100%" v-loading="loading">
        <el-table-column prop="id" align="center" label="分类id"></el-table-column>
        <el-table-column prop="categoryName" align="center" label="分类名称"></el-table-column>
        <el-table-column prop="createTime" align="center" label="创建时间"></el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button class="yc-edit" @click="doEdit(scope.row)">编辑</el-button>
            <el-button class="yc-del" @click="doDelete(scope.row)">删除</el-button>
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
          <!-- <el-form-item v-loading="uploadLoading" label="LOGO" :label-width="formLabelWidth">
            <el-image
              v-if="form.logo"
              style="width: 100px; height: 100px"
              :src="form.logo"
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
          </el-form-item>-->
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model.trim="form.categoryName" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="doSaveOrUpdate">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import filterOptions from './filter-options'
import GFilter from '@/components/GFilter'
import categoryApi from '@/api/category'

export default {
  name: 'Category',
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
      return this.form.id ? '编辑分类' : '新增分类'
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
    doEdit(row) {
      this.form = { ...row }
      this.dialogFormVisible = true
    },
    doSaveOrUpdate() {
      categoryApi
        .saveOrUpdate(this.form)
        .then(() => {
          this.dialogFormVisible = false
          if (this.form.id) {
            this.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success'
            })
          } else {
            this.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success'
            })
          }
          this.load()
        })
        .catch(() => {})
    },
    doDelete(row) {
      this.$confirm('此操作将删除该分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          categoryApi
            .del({
              id: row.id
            })
            .then(res => {
              this.load()
              this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success'
              })
            })
        })
        .catch(() => {})
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
      categoryApi
        .queryProductCategory({
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
