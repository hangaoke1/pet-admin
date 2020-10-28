<template>
  <div>
    <!-- 查询条件 -->
    <div class="pb-1 border-bottom-divider flex align-center">
      <el-input
        v-model="keyword"
        placeholder="请输入关键字"
        style="width: 200px;"
        class="filter-item"
        suffix-icon="el-icon-search"
        size="small"
        @keyup.enter.native="getList"
      />
      <el-button
        class="filter-item ml-1 yc-edit"
        icon="el-icon-search"
        size="small"
        @click="getList"
      >查询</el-button>
    </div>

    <el-table size="small" :data="list" style="width: 100%" empty-text="暂无商品" row-key="id">
      <el-table-column prop="skuImgUrl" label="图片" align="center" width="120">
        <template slot-scope="scope">
          <el-image style="width: 40px;height:40px" :src="url2Webp(scope.row.skuImgUrl)" lazy webp />
        </template>
      </el-table-column>
      <el-table-column prop="skuName" label="商品名称" align="center">
        <template slot-scope="scope">{{ scope.row.skuName }}</template>
      </el-table-column>
      <el-table-column prop="stock" label="库存" align="center"></el-table-column>
      <el-table-column prop="price" label="价格(元)" align="center">
        <template slot-scope="scope">{{ scope.row.price.toFixed(2) }}</template>
      </el-table-column>
      <el-table-column prop="price" label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button class="yc-edit" size="small" @click="doEdit(scope.row)">编辑</el-button>
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
</template>

<script>
import _ from 'lodash'
import productApi from '@/api/product'

export default {
  data() {
    return {
      keyword: '',
      pageNo: 1,
      pageSize: 10,
      totalCount: 0,
      loading: false,
      list: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    doEdit(info) {
      this.$router.push({
        path: `/product/edit/${info.productId}`
      })
    },
    getList() {
      const query = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
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
    }
  }
}
</script>

<style lang="less" scoped>
.u-page {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
