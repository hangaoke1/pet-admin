<template>
  <div class="u-product">
    <div class="u-page">
      <el-pagination
        background
        :current-page="pageNo"
        :page-sizes="[20, 50, 100, 200]"
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
import * as productApi from '@/api/product'

export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      totalCount: 0,
      loading: false,
      list: []
    }
  },
  beforeMount() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      productApi.queryProducts({
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }).then(res => {
        this.loading = false
        console.log('>>> 获取商品列表', res)
      }).catch(err => {
        this.loading = false
        this.$message.error(err.message)
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

<style>
</style>
