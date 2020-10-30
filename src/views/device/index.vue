<template>
  <div class="u-device p-2">
    <div class="p-3 bg-bai">
      <div class="flex justify-between pb-1 border-bottom-divider">
        <el-input
          v-model="listQuery.title"
          placeholder="请输入设备编号"
          style="width: 200px;"
          class="filter-item"
          size="small"
          suffix-icon="el-icon-search"
        />
        <div>
          <el-button
            v-waves
            class="filter-item yc-btn"
            icon="el-icon-search"
            size="small"
            @click="getDevice"
          >查询</el-button>
          <el-button
            v-waves
            class="filter-item yc-del"
            style="margin-left: 10px;"
            icon="el-icon-edit"
            size="small"
            @click="handleAddClick"
          >新增设备</el-button>
        </div>
      </div>
      <el-table
        class="mt-1"
        v-loading="loading"
        :data="list"
        size="small"
        stripe
        highlight-current-row
        style="width: 100%"
        header-row-class-name="u-tabel__header"
      >
        <el-table-column align="center" type="index" width="50"></el-table-column>
        <el-table-column align="center" prop="cameraNo" label="设备编号"></el-table-column>
        <el-table-column align="center" prop="cameraName" label="设备名称">
          <template slot-scope="{row}">
            <span>{{ row.cameraName }}</span>
            <el-button class="yc-btn" size="mini" @click="preview(row)">预览</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="url" label="设备地址（m3u8）"></el-table-column>
        <el-table-column label="操作" align="center" width="250">
          <template slot-scope="{row}">
            <el-button class="yc-edit" size="mini" @click="handleModifyStatus(row, 'edit')">编辑</el-button>
            <el-button class="yc-btn" size="mini" @click="handleModifyStatus(row, 'manage')">管理用户</el-button>
            <el-button class="yc-del" size="mini" @click="handleModifyStatus(row,'deleted')">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="u-page">
        <el-pagination
          background
          :current-page="pageNo"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>

    <el-dialog :title="dialogStatus==='create' ? '新增设备': '编辑设备'" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="form"
        label-position="left"
        label-width="100px"
        style="width: 400px;"
      >
        <el-form-item label="设备编号" prop="cameraNo">
          <el-input v-model="form.cameraNo" />
        </el-form-item>
        <el-form-item label="设备名称" prop="cameraName">
          <el-input v-model="form.cameraName" />
        </el-form-item>
        <el-form-item label="设备地址（m3u8）" prop="url">
          <el-input v-model="form.url" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createDevice():updateDevice()">确定</el-button>
      </div>
    </el-dialog>

    <el-drawer :visible.sync="drawer" direction="rtl" :with-header="false" size="500px">
      <div class="u-manage" v-if="currentDevice">
        <div class="u-manage__title">设备名称： {{ currentDevice.cameraName }}</div>
        <el-table
          v-loading="bindUserListLoading"
          :data="bindUserList"
          style="width: 100%"
          max-height="550px"
        >
          <el-table-column label="头像" align="center">
            <template slot-scope="{row}">
              <img class="u-manage__avatar" :src="row.wechatAvatar" :alts="row.nickName" />
            </template>
          </el-table-column>
          <el-table-column prop="nickName" label="姓名"></el-table-column>
          <el-table-column prop="mobile" label="手机号"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="{row}">
              <el-button class="yc-del" size="mini" @click="handleBindUserDebounce(row, 1)">解绑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="text-center mt-1">
          <el-button class="yc-btn" size="mini" @click="searchVisible = true">添加用户</el-button>
        </div>
      </div>
    </el-drawer>

    <el-dialog title="用户搜索" :visible.sync="searchVisible" width="800px">
      <div class="u-search">
        <div class="u-search__header">
          <el-input v-model="searchKeyword" placeholder="请输入查询关键字" prefix-icon="el-icon-search"></el-input>
          <el-button class="u-search__btn yc-btn" icon="el-icon-search" @click="searchUser">搜索</el-button>
        </div>
        <el-table :data="searchList" class="mt-1" height="400">
          <el-table-column label="头像" align="center">
            <template slot-scope="{row}">
              <img class="u-manage__avatar" :src="row.wechatAvatar" :alts="row.name" />
            </template>
          </el-table-column>
          <el-table-column prop="nickName" label="姓名"></el-table-column>
          <el-table-column prop="mobile" label="手机号"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="{row}">
              <el-button
                v-if="!isAreadyBind(row)"
                class="yc-btn"
                size="mini"
                @click="handleBindUserDebounce(row, 0)"
              >绑定</el-button>
              <div v-else>已绑定</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="searchVisible = false">取 消</el-button>
        <el-button type="primary" @click="searchVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import waves from '@/directive/waves'
import deviceApi from '@/api/device'
import userApi from '@/api/user'
import config from '@/config'
import _ from 'lodash'

export default {
  name: 'Device',
  directives: { waves },
  data() {
    return {
      config,
      searchVisible: false,
      searchKeyword: '',
      searchList: [],
      bindUserListLoading: true,
      bindUserList: [],
      drawer: false,
      dialogStatus: 'create', // create edit
      dialogFormVisible: false,
      listQuery: {},
      pageSize: 20,
      pageNo: 1,
      totalCount: 0,
      loading: true,
      list: [],
      currentDevice: '',
      form: {
        id: '',
        cameraNo: '',
        cameraName: '',
        url: ''
      },
      rules: {
        cameraNo: [{ required: true, message: '设备编号不能为空', trigger: 'blur' }],
        cameraName: [{ required: true, message: '设备名称不能为空', trigger: 'blur' }],
        url: [{ required: true, message: '设备地址不能为空', trigger: 'blur' }]
      }
    }
  },
  beforeMount() {
    this.handleBindUserDebounce = _.debounce(this.handleBindUser, 500, {
      leading: true,
      trailing: false
    })
  },
  mounted() {
    this.getDevice()
  },
  methods: {
    preview(row) {
      if (row.url.indexOf('hls01open.ys7.com') === -1) {
        this.$message.error('请填写正确的设备地址（m3u8）')
      } else {
        const id = row.url.slice(34, 66)
        window.open(`https://open.ys7.com/view/h5/${id}`)
      }
    },
    isAreadyBind(row) {
      const { uid } = row
      return !!this.bindUserList.filter(item => item.uid === uid).length
    },
    queryBindUserList(id) {
      this.bindUserListLoading = true
      return deviceApi
        .queryUserByCameraId({
          id
        })
        .then(res => {
          this.bindUserListLoading = false
          this.bindUserList = res.data || []
        })
        .catch(() => {
          this.bindUserListLoading = false
          this.bindUserList = []
        })
    },
    // 绑定用户
    handleBindUser(row, bindFlag) {
      const { uid } = row
      const { id } = this.currentDevice
      deviceApi
        .bindCameraByUid({
          uid,
          id,
          bindFlag
        })
        .then(res => {
          this.$message.success(bindFlag === 0 ? '绑定成功' : '解绑成功')
          this.queryBindUserList(id)
        })
        .catch(err => {
          this.$message.error(err.message)
        })
    },
    searchUser() {
      const keyword = this.searchKeyword.trim()
      userApi
        .queryUserList({
          keyword,
          pageSize: 20,
          pageNo: 1
        })
        .then(res => {
          this.searchList = res.data.items
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleModifyStatus(row, type) {
      // 管理用户
      if (type === 'manage') {
        this.queryBindUserList(row.id)
        this.currentDevice = row
        this.drawer = true
      }
      // 编辑设备
      if (type === 'edit') {
        this.dialogStatus = 'edit'
        this.form = {
          id: row.id,
          cameraNo: row.cameraNo,
          cameraName: row.cameraName,
          url: row.url
        }
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      }
      // 删除设备
      if (type === 'deleted') {
        this.$confirm(`此操作将删除设备【${row.cameraName}】, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.handleDelete(row.id)
          })
          .catch(() => {})
      }
    },
    handleDelete(id) {
      deviceApi
        .deleteCamera({ id })
        .then(res => {
          this.$message.success('删除成功')
          this.getDevice()
        })
        .catch(err => {
          console.error(err)
          this.$message.error('删除失败')
        })
    },
    handleAddClick() {
      this.dialogStatus = 'create'
      this.form = {
        id: '',
        cameraNo: '',
        cameraName: '',
        url: ''
      }
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createDevice() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          deviceApi
            .insertCamera({
              cameraNo: this.form.cameraNo,
              cameraName: this.form.cameraName,
              url: this.form.url
            })
            .then(() => {
              this.$message.success('新增成功')
              this.dialogFormVisible = false
              this.getDevice()
            })
            .catch(err => {
              this.$message.error(err.message || '新增失败')
            })
        }
      })
    },
    updateDevice() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          deviceApi
            .updateCamera({
              id: this.form.id,
              cameraNo: this.form.cameraNo,
              cameraName: this.form.cameraName,
              url: this.form.url
            })
            .then(() => {
              this.$message.success('修改成功')
              this.dialogFormVisible = false
              this.getDevice()
            })
            .catch(err => {
              this.$message.error(err.message || '修改失败')
            })
        }
      })
    },
    getDevice() {
      this.loading = true
      deviceApi
        .queryCameraList({
          pageSize: this.pageSize,
          pageNo: this.pageNo
        })
        .then(res => {
          this.totalCount = res.data.totalCount
          this.list = res.data.items
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getDevice()
    },
    handleCurrentChange(pageNo) {
      this.pageNo = pageNo
      this.getDevice()
    }
  }
}
</script>

<style lang='less' scoped>
.u-device {
  color: #333;
}
.u-page {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
.u-manage {
  padding: 20px;
  &__title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__avatar {
    width: 50px;
    height: 50px;
  }
}
.u-search {
  &__header {
    display: flex;
    align-items: center;
  }
  &__btn {
    margin-left: 10px;
  }
}
</style>

<style lang='less'>
.u-device {
  .el-dialog {
    min-width: 500px;
  }
}
</style>
