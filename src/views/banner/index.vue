<template>
  <div class="p-2">
    <div class="bg-bai p-3">
      <div class="mb-2 text-left">
        <el-button type="primary" size="small" @click="handleAdd">新增轮播</el-button>
      </div>
      <el-table
        v-loading="loading"
        :data="list"
        size="mini"
        style="width: 100%"
        header-row-class-name="u-tabel__header"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="图片">
          <template slot-scope="scope">
            <el-image
              style="width: 187px; height: 100px"
              :src="scope.row.imgUrl"
              fit="fill"
              lazy
              :preview-src-list="[scope.row.imgUrl]"
            />
          </template>
        </el-table-column>
        <el-table-column prop="detail" label="描述"></el-table-column>
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
        <el-form-item v-loading="uploadLoading" label="轮播图片">
          <el-image
            v-if="form.imgUrl"
            style="width: 187px; height: 100px"
            :src="form.imgUrl"
            fit="fill"
            lazy
            :preview-src-list="[form.imgUrl]"
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
        <el-form-item label="类型">
          <el-select v-model="form.bannerType" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="轮播描述">
          <el-input v-model="form.detail" autocomplete="off"></el-input>
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
import bannerApi from '@/api/banner'
export default {
  name: 'Banner',
  data() {
    return {
      type: 'add',
      form: {},
      dialogVisible: false,
      loading: true,
      uploadLoading: false,
      list: [],
      options: [
        {
          value: 0,
          label: '首页'
        },
        {
          value: 1,
          label: '商城'
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.queryBanners()
    },
    queryBanners() {
      this.loading = true
      bannerApi.queryBanners().then(res => {
        this.loading = false
        this.list = res.data || []
      })
    },
    insertBanner(data) {
      bannerApi.insertBanner(data).then(() => {
        this.$message.success('添加成功')
        this.dialogVisible = false
        this.queryBanners()
      })
    },
    updateBanner(data) {
      bannerApi.updateBanner(data).then(() => {
        this.$message.success('修改成功')
        this.dialogVisible = false
        this.queryBanners()
      })
    },
    handleSubmit() {
      if (!this.form.imgUrl) {
        return this.$message.error('图片不能为空')
      }
      if (this.type === 'add') {
        this.insertBanner(this.form)
      } else {
        this.updateBanner(this.form)
      }
    },
    handleAdd() {
      this.type = 'add'
      this.form = {
        imgUrl: '',
        detail: '',
        bannerType: 0
      }
      this.dialogVisible = true
    },
    handleEdit(index, item) {
      this.type = 'edit'
      this.form = _.cloneDeep(item)
      this.dialogVisible = true
    },
    handleDelete(index, item) {
      this.$confirm('此操作将永久删除该banner, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          bannerApi
            .deleteBanner({
              id: item.id
            })
            .then(() => {
              this.init()
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
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
      this.uploadLoading = false
      this.form.imgUrl = res.data
    },
    beforeUpload() {
      this.uploadLoading = true
      return true
    }
  }
}
</script>

<style lang='less' scoped>
</style>
