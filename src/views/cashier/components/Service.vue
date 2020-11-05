<template>
  <div class="flex border-bottom-divider">
    <div class="u-sku__menu flex-0">
      <el-tree
        ref="tree"
        :data="serviceList"
        :props="defaultProps"
        highlight-current
        :current-node-key="menu.name"
        node-key="name"
        @node-click="handleNodeClick"
      ></el-tree>
    </div>
    <div class="u-sku__list p-1 flex-1" style="width: 1px">
      <div class="flex align-center justify-between pb-1">
        <div>所属分类：{{ menu.name }}</div>
        <el-input
          v-model="keyword"
          class="u-search"
          size="mini"
          placeholder="搜索服务名称"
          suffix-icon="el-icon-search"
          @keyup.enter.native="getList"
        ></el-input>
      </div>
      <el-table
        size="small"
        ref="table"
        :data="list"
        style="width: 100%"
        height="350px"
        empty-text="暂无服务"
        row-key="id"
        @row-click="clickRow"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center" :reserve-selection="true"></el-table-column>
        <el-table-column prop="date" label="服务内容" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column prop="date" label="服务类目" align="center">
          <template slot-scope="scope">{{ scope.row.category }}-{{ scope.row.mealName }}</template>
        </el-table-column>
        <el-table-column prop="originalPrice" label="原价(元)" align="center">
          <template slot-scope="scope">
            <span class="f-number">{{ scope.row.originalPrice.toFixed(2) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="memberPrice" label="会员价(元)" align="center">
          <template slot-scope="scope">
            <span class="f-number">{{ scope.row.memberPrice.toFixed(2) }}</span>
          </template>
        </el-table-column>
      </el-table>

      <div class="u-page">
        <el-pagination
          small
          background
          :current-page="pageNo"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="totalCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import serviceApi from '@/api/service'
export default {
  data() {
    return {
      keyword: '',
      pageNo: 1,
      pageSize: 10,
      totalCount: 0,
      loading: false,
      list: [],
      menu: {
        name: '全部服务'
      },
      serviceList: [
        {
          name: '全部服务'
        },
        {
          name: '洗澡',
          isCategory: true,
          children: []
        },
        {
          name: '美容',
          isCategory: true,
          children: []
        },
        {
          name: '寄养',
          isCategory: true,
          children: []
        },
        {
          name: '单项',
          isCategory: true,
          children: []
        },
        {
          name: '其他',
          isCategory: true,
          children: []
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      // 跨页选择
      selectedAll: [],
      selectedCurrent: []
    }
  },
  mounted() {
    this.getMenuList()
    this.getList()
  },
  methods: {
    clickRow(row) {
      this.$refs.table.toggleRowSelection(row)
    },
    clear() {
      this.$refs.table.clearSelection()
    },
    handleSelectionChange(val) {
      this.selectedCurrent = val
      this.$emit('update:select', val)
    },
    handleNodeClick(data, a, b) {
      if (data.isCategory) {
        this.$refs.tree.setCurrentKey(this.menu.name)
        return
      }
      this.menu = data
      this.$refs.tree.setCurrentKey(data.name)
      this.pageNo = 1
      this.keyword = ''
      this.getList()
    },
    getList() {
      const query = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        mealName: '',
        category: '',
        name: this.keyword
      }
      if (this.menu.name !== '全部服务') {
        if (this.menu.isCategory) {
          query.category = this.menu.name
        } else {
          query.id = this.menu.id
        }
      }
      serviceApi.queryList(query).then(res => {
        this.list = res.data.items
        this.totalCount = res.data.totalCount
      })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getList()
    },
    handleCurrentChange(pageNo) {
      this.pageNo = pageNo
      this.getList()
    },
    getMenuList() {
      serviceApi
        .queryTreeList({
          pageSize: 999,
          pageNo: 1
        })
        .then(res => {
          const list = _.get(res.data, 'items', [])
          this.serviceList.forEach(v => (v.children = []))
          list.forEach(item => {
            const map = {
              洗澡: 1,
              美容: 2,
              寄养: 3,
              单项: 4,
              其他: 5
            }
            this.serviceList[map[item.category]].children.push(item)
          })
        })
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
.u-sku__menu {
  width: 140px;
  height: 470px;
  overflow-y: auto;
  border-right: 1px solid #f7f7fa;
}
.u-page {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
