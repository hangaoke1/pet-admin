<template>
  <div class="u-banner">
    <div class="u-title">
      <el-button type="primary" @click="addBanner">新增轮播</el-button>
    </div>
    <el-table :data="list" style="width: 100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="图片">
        <template slot-scope="scope">
          <el-image style="width: 187px; height: 100px" :src="scope.row.imgUrl" fit="fill" lazy />
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

    <el-dialog :title="type === 'add' ? '新增' : '编辑'" :visible.sync="dialogVisible">
      <el-form :model="form" label-width="80px">
        <el-form-item label="轮播图片">
          <el-image
            v-if="form.imgUrl"
            style="width: 187px; height: 100px"
            :src="form.imgUrl"
            fit="fill"
            lazy
          />
          <div>
            <el-upload
              action="/pet/uploadFile"
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
        <el-form-item label="轮播描述">
          <el-input v-model="form.detail" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      type: 'add',
      form: {},
      dialogVisible: false,
      list: [
        {
          id: 1,
          imgUrl:
            'https://hgkcdn.oss-cn-shanghai.aliyuncs.com/pet/banner1.jpeg',
          detail: '店铺1',
          createTime: '2020-01-19 08:53:30',
          state: 0
        },
        {
          id: 2,
          imgUrl:
            'https://hgkcdn.oss-cn-shanghai.aliyuncs.com/pet/banner2.jpeg',
          detail: '店铺2',
          createTime: '2020-01-19 14:49:31',
          state: 0
        },
        {
          id: 3,
          imgUrl: 'https://hgkcdn.oss-cn-shanghai.aliyuncs.com/pet/banner3.jpg',
          detail: '店铺3',
          createTime: '2020-01-19 14:49:40',
          state: 0
        }
      ]
    }
  },
  methods: {
    addBanner() {
      this.type = 'add'
      this.form = {
        imgUrl: '',
        detail: ''
      }
      this.dialogVisible = true
    },
    handleEdit(index, item) {
      this.type = 'edit'
      this.form = _.cloneDeep(item)
      this.dialogVisible = true
    },
    handleDelete() {
      this.$confirm('此操作将永久删除该banner, 是否继续?', '提示', {
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

<style>
.u-title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
}
</style>
