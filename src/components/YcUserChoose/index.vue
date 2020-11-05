<template>
  <el-dialog :show-close="false" :visible.sync="showChoose" width="700px">
    <div class="text-center" slot="title">用户选择</div>
    <div class="u-filter flex justify-end mb-1">
      <el-input
        class="yc-input"
        style="width: 250px"
        size="mini"
        v-model="keyword"
        placeholder="会员姓名、编号、手机号/宠物昵称"
      >
        <i class="el-icon-search" style="width: 25px;line-height: 28px;" slot="suffix"></i>
      </el-input>
    </div>
    <el-table
      :data="list"
      style="width: 100%"
      size="mini"
      row-key="uid"
      ref="table"
      @row-click="clickRow"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        align="center"
        :reserve-selection="true"
        v-if="!single"
      ></el-table-column>

      <el-table-column width="55" align="center" v-else>
        <template slot-scope="scope">
          <el-checkbox :value="selected && scope.row.uid === selected.uid"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="头像" align="center">
        <template slot-scope="scope">
          <el-avatar :src="scope.row.avatar"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="微信昵称" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" align="center"></el-table-column>
      <el-table-column prop="vipName" label="用户等级" align="center"></el-table-column>
      <el-table-column prop="mobile" label="联系方式" align="center"></el-table-column>
      <el-table-column prop="balance" label="余额" align="center"></el-table-column>
    </el-table>
    <div class="u-page">
      <el-pagination
        small
        background
        :current-page="pageNo"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="totalCount"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button class="yc-del" @click="showChoose = false">取 消</el-button>
      <el-button class="yc-btn" @click="doConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import userApi from '@/api/user'
export default {
  name: 'YcUserChoose',
  props: {
    value: [Array, Object],
    single: Boolean // 是否是单选模式
  },
  data() {
    return {
      keyword: '',
      showChoose: false,
      list: [],
      selectedList: [],
      selected: null,
      pageNo: 1,
      pageSize: 10,
      totalCount: 0
    }
  },
  methods: {
    doConfirm() {
      // 单选
      if (this.single) {
        this.$emit('input', this.selected)
      } else {
        this.$emit('input', this.selectedList)
      }
      this.showChoose = false
    },
    clickRow(row) {
      // 单选
      if (this.single) {
        this.selected = row
      } else {
        this.$refs.table.toggleRowSelection(row)
      }
    },
    handleSelectionChange(val) {
      this.selectedList = val
    },
    show() {
      this.showChoose = true
      this.pageNo = 1
      this.list = []
      this.keyword = ''
      this.getList()
      if (!this.single) {
        this.$nextTick(() => {
          this.$refs.table.clearSelection()
          this.value.map(row => {
            this.$refs.table.toggleRowSelection(row, true)
          })
        })
      } else {
        this.selected = this.value
      }
    },
    getList() {
      userApi
        .queryVipList({
          pageNo: this.pageNo,
          pageSize: this.pageSize
        })
        .then(res => {
          this.list = res.data.items
          this.totalCount = res.data.totalCount
        })
    },
    handleCurrentChange(pageNo) {
      this.pageNo = pageNo
      this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
.u-search {
  width: 200px;
  /deep/ .el-input__inner {
    border-radius: 15px;
  }
}

.u-page {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
