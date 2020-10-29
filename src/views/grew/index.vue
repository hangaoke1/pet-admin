<template>
  <div class="dashboard-container p-2">
    <yc-tabs
      :options="[{ label: '待确认', value: 0 }, { label: '寄养中', value: 1 }, { label: '已完成', value: 2 }]"
      v-model="petState"
      @change="load"
    ></yc-tabs>
    <div class="bg-bai p-3">
      <g-filter class="pb-1" :options="options" @refresh="handleRefresh" @search="handleSearch">
        <el-button class="yc-del" slot="left" size="small" @click="doAdd">添加寄养</el-button>
      </g-filter>
      <el-table size="small" class="mt-1" :data="list" style="width: 100%" v-loading="loading">
        <el-table-column prop="createTime" align="center" label="申请日期">
          <template slot-scope="scope">{{ scope.row.createTime.slice(0, 10) }}</template>
        </el-table-column>
        <el-table-column prop="petName" align="center" label="宠物名称"></el-table-column>
        <el-table-column prop="petType" align="center" label="宠物类型">
          <template slot-scope="scope">
            <el-tag size="medium" v-if="scope.row.petType === 1">猫咪</el-tag>
            <el-tag size="medium" type="success" v-else>狗狗</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="startTime" align="center" label="寄养开始">
          <template slot-scope="scope">{{ scope.row.startTime.slice(0, 10) }}</template>
        </el-table-column>
        <el-table-column prop="endTime" align="center" label="寄养结束">
          <template slot-scope="scope">{{ scope.row.endTime.slice(0, 10) }}</template>
        </el-table-column>
        <el-table-column prop="petState" align="center" label="寄养状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.petState === 0" size="medium" type="warning">待确认</el-tag>
            <el-tag v-else-if="scope.row.petState === 1" size="medium">寄养中</el-tag>
            <el-tag v-else size="medium" type="success">已完成</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="phone" align="center" label="手机号"></el-table-column>
        <el-table-column prop="cameraId" align="center" label="监控Id" width="150">
          <template slot-scope="scope">
            <span v-if="scope.row.cameraId" size="medium" type="warning">待确认</span>
            <el-button class="yc-edit" size="mini" v-else>点击绑定</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="remark" align="center" label="备注"></el-table-column>
        <el-table-column prop="action" align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button v-if="scope.row.petState === 0" class="yc-edit" size="small" @click="changePlaced(scope.row, 2)">确认到店</el-button>
            <el-button v-if="scope.row.petState === 1" class="yc-edit" size="small" @click="changePlaced(scope.row, 0)">结束寄养</el-button>
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
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import filterOptions from './filter-options'
import GFilter from '@/components/GFilter'
import grewApi from '@/api/grew'
import { param } from '@/utils'
import YcTabs from '@/components/YcTabs'
import grew from '@/api/grew'

export default {
  name: 'Grew',
  components: {
    GFilter,
    YcTabs
  },
  data() {
    return {
      options: filterOptions,
      petState: 0,
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
    // 确认到店 确认寄养时传 2，结束寄养时传 0
    changePlaced(row, placed) {
      this.$confirm('确定宝贝到店, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          grewApi
            .confirm({
              id: row.id,
              placed
            })
            .then(res => {
              this.load()
              this.$notify({
                title: '成功',
                message: '操作成功',
                type: 'success'
              })
            })
        })
        .catch(() => {})
    },
    // 新建寄养
    doAdd() {
      this.$message.warning('暂不支持')
    },
    // 删除寄养
    doDelete(row) {
      this.$confirm('此操作将删除该寄养申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          grewApi
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
      const params = {
        pageNo: this.page.pageNo,
        pageSize: this.page.pageSize,
        ...this.listQuery,
        petState: this.petState
      }
      if (params.dateRange) {
        params.startTime = dayjs(params.dateRange[0]).format('YYYY-MM-DD HH:mm:ss')
        params.endTime = dayjs(params.dateRange[1]).format('YYYY-MM-DD HH:mm:ss')
      }
      delete params.dateRange
      grewApi
        .queryList(params)
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
