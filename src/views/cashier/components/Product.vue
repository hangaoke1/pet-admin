<template>
  <div class="flex border-bottom-divider">
    <div class="u-sku__menu flex-0">
      <el-tree
        ref="tree"
        :data="serviceList"
        :props="defaultProps"
        highlight-current
        :current-node-key="menu.categoryName"
        node-key="categoryName"
        @node-click="handleNodeClick"
      ></el-tree>
    </div>
    <div class="u-sku__list p-1 flex-1">
      <div class="flex align-center justify-between pb-1">
        <div>所属分类：{{ menu.categoryName }}</div>
        <el-input
          v-model="keyword"
          class="u-search"
          size="mini"
          placeholder="搜索商品名称/条形码"
          suffix-icon="el-icon-search"
          @keyup.enter.native="getList"
        ></el-input>
      </div>
      <el-table
        size="small"
        ref="table"
        :data="list"
        style="width: 100%"
        empty-text="暂无商品"
        row-key="id"
        @row-click="clickRow"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center" :reserve-selection="true"></el-table-column>
        <el-table-column prop="skuName" label="图片" align="center" width="120">
          <template slot-scope="scope">
            <img style="width: 40px;height:40px" :src="url2Webp(scope.row.skuImgUrl)" alt />
          </template>
        </el-table-column>
        <el-table-column prop="skuName" label="商品名称" align="center">
          <template slot-scope="scope">{{ scope.row.skuName }}</template>
        </el-table-column>
        <el-table-column prop="stock" label="库存" align="center" width="100"></el-table-column>
        <el-table-column prop="price" label="价格(元)" align="center" width="150">
          <template slot-scope="scope">{{ scope.row.price.toFixed(2) }}</template>
        </el-table-column>
      </el-table>

      <div class="u-page">
        <el-pagination
          small
          background
          :current-page="pageNo"
          :page-sizes="[5, 20, 30, 50]"
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
import categoryApi from '@/api/category'
import productApi from '@/api/product'
import category from '@/api/category'

export default {
  data() {
    return {
      keyword: '',
      pageNo: 1,
      pageSize: 5,
      totalCount: 0,
      loading: false,
      list: [],
      menu: {
        categoryName: '全部商品'
      },
      serviceList: [
        {
          categoryName: '全部商品'
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'categoryName'
      },
      // 跨页选择
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
      if (this.menu.categoryName === data.categoryName) {
        return
      }
      this.menu = data
      this.$refs.tree.setCurrentKey(data.categoryName)
      this.pageNo = 1
      this.keyword = ''
      this.getList()
    },
    getList() {
      const query = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        categoryId: this.menu.id,
        keyword: this.keyword
      }
      productApi.queryProductSkuList(query).then(res => {
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
      categoryApi
        .queryProductCategory({
          pageSize: 999,
          pageNo: 1
        })
        .then(res => {
          const list = _.get(res, 'data', [])
          this.serviceList = [...this.serviceList, ...list]
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
