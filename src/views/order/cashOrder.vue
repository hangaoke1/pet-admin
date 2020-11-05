<template>
  <div class="u-cashOrder p-2">
    <div class="p-2 bg-bai" v-loading="loading">
      <div class="flex align-center p-1 text-center">
        <div style="width: 80px">图片</div>
        <div style="width: 30%">名称</div>
        <div style="width: 20%">数量</div>
        <div style="width: 20%">单价</div>
      </div>
      <order-item v-for="item in list" :key="item.orderId" :info="item"></order-item>
    </div>

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
</template>

<script>
import storeApi from '@/api/store'
import OrderItem from './components/CashOrderItem'
export default {
  name: 'CashOrder',
  components: {
    OrderItem
  },
  data() {
    return {
      loading: false,
      page: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      list: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      storeApi
        .queryList({
          pageNo: this.page.pageNo,
          pageSize: this.page.pageSize
        })
        .then(res => {
          this.list = res.data.items
          this.page.total = res.data.totalCount
        })
        .finally(() => {
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

<style lang="less" scoped>
.u-cashOrder {
  font-size: 14px;
  color: #333;
}
</style>
