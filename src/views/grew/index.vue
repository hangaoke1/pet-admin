<template>
  <div class="dashboard-container p-2">
    <div class="bg-bai p-3">
      <g-filter class="pb-1" :options="options" @refresh="handleRefresh" @search="handleSearch">
        <el-button slot="left" size="small" @click="doAdd">添加寄养</el-button>
      </g-filter>
      <el-table size="small" class="mt-1" :data="list" style="width: 100%" v-loading="loading">
        <el-table-column prop="petName" align="center" label="宠物名称"></el-table-column>
        <el-table-column prop="petType" align="center" label="宠物类型">
          <template slot-scope="scope">
            <el-tag size="medium" v-if="scope.row.petType === 1">猫咪</el-tag>
            <el-tag size="medium" type="success" v-else>狗狗</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="startTime" align="center" label="开始时间">
          <template slot-scope="scope">{{ scope.row.startTime.slice(0, 10) }}</template>
        </el-table-column>
        <el-table-column prop="endTime" align="center" label="结束时间">
          <template slot-scope="scope">{{ scope.row.endTime.slice(0, 10) }}</template>
        </el-table-column>
        <el-table-column prop="petState" align="center" label="寄养状态" width="200">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.petState === 0" size="medium" type="warning">待确认</el-tag>
            <el-tag v-else-if="scope.row.petState === 1" size="medium">寄养中</el-tag>
            <el-tag v-else size="medium" type="success">已完成</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="phone" align="center" label="手机号"></el-table-column>
        <el-table-column prop="cameraId" align="center" label="监控Id"></el-table-column>
        <el-table-column prop="remark" align="center" label="备注"></el-table-column>
        <el-table-column prop="action" align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="text" @click="doDelete(scope.row)">详情</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button class="text-red" size="small" type="text" @click="doDelete(scope.row)">删除</el-button>
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
import grewApi from '@/api/grew'

export default {
  name: 'Grew',
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
      form: {}
    }
  },
  computed: {
    editText() {
      return this.form.id ? '编辑寄养' : '新增寄养'
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
      this.$message.warning('暂不支持')
    },
    doUpdate(row) {
      this.form = { ...row }
      this.dialogFormVisible = true
    },
    doSubmitAdd() {
      grewApi
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
        .cathc(() => {})
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
      grewApi
        .queryList({
          pageNo: this.page.pageNo,
          pageSize: this.page.pageSize,
          ...this.listQuery
        })
        .then(res => {
          this.list = res.data.items
          this.page.total = res.data.totalCount
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
