<template>
  <div class="p-2">
    <div class="bg-bai p-3">
      <div class="mb-2 text-left">
        <el-button type="primary" size="small" @click="handleAdd">新增公告</el-button>
      </div>
      <el-table
        size="mini"
        v-loading="loading"
        :data="list"
        style="width: 100%"
        header-row-class-name="u-tabel__header"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="title" label="公告内容"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="type === 'add' ? '新增' : '编辑'" :visible.sync="dialogVisible">
      <el-form :model="form" label-width="80px">
        <el-form-item label="公告内容">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import noticeApi from '@/api/notice'
export default {
  name: 'Notice',
  data() {
    return {
      type: 'add',
      form: {
        title: ''
      },
      dialogVisible: false,
      loading: true,
      list: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.queryNotice()
    },
    queryNotice() {
      this.loading = true
      noticeApi.queryNotice().then(res => {
        this.loading = false
        this.list = res.data || []
      })
    },
    insertNotice(data) {
      noticeApi.insertNotice(data).then(() => {
        this.$message.success('添加成功')
        this.dialogVisible = false
        this.queryNotice()
      })
    },
    updateNotice(data) {
      noticeApi.updateNotice(data).then(() => {
        this.$message.success('修改成功')
        this.dialogVisible = false
        this.queryNotice()
      })
    },
    handleSubmit() {
      if (!this.form.title) {
        return this.$message.error('公告内容不能为空')
      }
      if (this.type === 'add') {
        this.insertNotice(this.form)
      } else {
        this.updateNotice(this.form)
      }
    },
    handleAdd() {
      this.type = 'add'
      this.form = {
        title: ''
      }
      this.dialogVisible = true
    },
    handleEdit(index, item) {
      this.type = 'edit'
      this.form = _.cloneDeep(item)
      this.dialogVisible = true
    },
    handleDelete() {
      this.$confirm('此操作将永久删除该公告, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    handleUploadSuccess(res, file) {
      this.form.imgUrl = res.data
    },
    beforeUpload() {
      return true
    }
  }
}
</script>

<style lang='less' scoped>
</style>
