<template>
  <div class="u-shopOrder">
    <!-- 查询条件 -->
    <div class="pb-1 border-bottom-divider flex align-center justify-between">
      <yc-radio
        class="flex-0"
        :options="statusOptions"
        v-model="listQuery.warrantyStatus"
        @change="getList"
      ></yc-radio>
      <div class="flex align-center">
        <el-date-picker
          v-model="listQuery.date"
          class="mr-1"
          type="daterange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
          size="small"
          :default-time="['00:00:00', '23:59:59']"
          @change="getList"
        ></el-date-picker>
        <el-input
          v-model="listQuery.orderId"
          placeholder="请输入订单号"
          style="width: 200px;"
          class="mr-1"
          clearable
          size="small"
          suffix-icon="el-icon-search"
          @keyup.enter.native="getList"
        />
        <el-button class="yc-edit" icon="el-icon-search" size="small" @click="getList">查询</el-button>
      </div>
    </div>

    <!-- 数据表格 -->
    <el-table
      class="mt-1"
      v-loading="loading"
      :data="list"
      highlight-current-row
      style="width: 100%"
      size="small"
      header-row-class-name="u-tabel__header"
    >
      <el-table-column label="订单编号" width="180" align="center">
        <template slot-scope="{row}">
          <span>{{ row.order.orderId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品详情" min-width="300">
        <template slot-scope="{row}">
          <sku-list :info="row"></sku-list>
        </template>
      </el-table-column>
      <el-table-column label="退款状态" width="120" align="center">
        <template slot-scope="{row}">
          <span>{{ wText[row.order.warrantyStatus] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" width="120" align="center">
        <template slot-scope="{row}">
          <el-tag :type="colorMap[row.order.orderStatus]">{{ textMap[row.order.orderStatus] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="订单总价(元)" width="150" align="center">
        <template slot-scope="{row}">
          <span class="font-weight-bold font-s-14">{{ row.order.totalFee.toFixed(2) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="物流信息" min-width="180">
        <template slot-scope="{row}">
          <span>{{ row.order.logisticsName }}</span>
          <span>{{ row.order.logisticsNo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单备注" align="center" width="200">
        <template slot-scope="{row}">
          <div class="u-buyerMemo">{{ row.order.buyerMemo }}</div>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" min-width="200">
        <template slot-scope="{row}">
          <div class="u-createTime">{{ row.order.createTime }}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250" fixed="right" align="center">
        <template slot-scope="{row}">
          <el-button size="mini" class="yc-btn" @click="goDetail(row)">详情</el-button>
          <el-button
            v-if="[1, 4].includes(row.order.warrantyStatus)"
            size="mini"
            class="yc-del"
            @click="doRefund(row)"
          >退款</el-button>
          <el-button
            v-if="[1, 4].includes(row.order.warrantyStatus)"
            size="mini"
            class="yc-del"
            @click="closeRefund(row)"
          >关闭</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 底部分页 -->
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
import dayjs from 'dayjs'
import orderApi from '@/api/order'
import { recentWeek, recentMonth } from '@/utils/date'
import YcRadio from '@/components/YcRadio'
import SkuList from './SkuList'
export default {
  name: 'OnlineOrder',
  components: {
    YcRadio,
    SkuList
  },
  data() {
    return {
      options: [
        {
          label: '商家配送',
          value: '商家配送'
        },
        {
          label: '顺丰快递',
          value: '顺丰快递'
        },
        {
          label: '圆通快递',
          value: '圆通快递'
        },
        {
          label: '中通快递',
          value: '中通快递'
        },
        {
          label: '申通快递',
          value: '申通快递'
        },
        {
          label: '韵达快递',
          value: '韵达快递'
        },
        {
          label: '百世汇通快递',
          value: '百世汇通快递'
        },
        {
          label: '天天快递',
          value: '天天快递'
        }
      ],
      textMap: {
        100: '待支付',
        200: '待发货',
        300: '待收货',
        400: '已完成',
        900: '已取消'
      },
      colorMap: {
        100: 'danger',
        200: 'warning',
        300: '',
        400: 'success',
        900: 'info'
      },
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              picker.$emit('pick', recentWeek())
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              picker.$emit('pick', recentMonth())
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              picker.$emit('pick', recentMonth(-3))
            }
          }
        ]
      },
      statusOptions: [
        { label: '全部订单', value: '1,2,3,4,5,6' },
        { label: '退款中', value: '1,4' },
        { label: '退款关闭', value: '2,5' },
        { label: '退款成功', value: '3,6' }
      ],
      wText: {
        1: '退款中',
        2: '退款关闭',
        3: '退款成功',
        4: '退货中',
        5: '退货关闭',
        6: '退货成功'
      },
      listQuery: {
        warrantyStatus: '1,2,3,4,5,6',
        date: ''
      },
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
    closeRefund(row) {
      this.$confirm('此操作将拒绝用户退款申请并关闭申请单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          orderApi
            .onlineRefundClose({
              orderId: row.order.orderId,
              warrantyStatus: row.order.warrantyStatus === 1 ? 2 : 5
            })
            .then(res => {
              this.$notify({
                title: '成功',
                message: '审核通过',
                type: 'success'
              })
              this.getList()
            })
        })
        .catch(() => {})
    },
    doRefund(row) {
      this.$confirm('此操作将同意用户退款申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 退款
          if (row.order.warrantyStatus === 1) {
            orderApi
              .onlineOrderAuditRefund({
                orderId: row.order.orderId
              })
              .then(res => {
                this.$notify({
                  title: '成功',
                  message: '审核通过',
                  type: 'success'
                })
                this.getList()
              })
          }
          // 退货退款
          if (row.order.warrantyStatus === 4) {
            orderApi
              .onlineOrderAuditReturn({
                orderId: row.order.orderId
              })
              .then(res => {
                this.$notify({
                  title: '成功',
                  message: '审核通过',
                  type: 'success'
                })
                this.getList()
              })
          }
        })
        .catch(() => {})
    },
    // 前往详情
    goDetail(row) {
      this.$router.push(`/order/onlineOrderDetail?orderId=${row.order.orderId}`)
    },
    getList() {
      this.loading = true
      let startTime = ''
      let endTitme = ''
      if (this.listQuery.date) {
        startTime = dayjs(this.listQuery.date[0]).format('YYYY-MM-DD HH:mm:ss')
        endTitme = dayjs(this.listQuery.date[1]).format('YYYY-MM-DD HH:mm:ss')
      }
      orderApi
        .onlineOrderQuery({
          startTime,
          endTitme,
          orderId: this.listQuery.orderId,
          warrantyStatus: this.listQuery.warrantyStatus,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        })
        .then(res => {
          res = res.data
          this.loading = false
          this.list = res.items
          this.totalCount = res.totalCount
        })
        .catch(err => {
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

<style lang="less" scoped>
.u-shopOrder {
  color: #333;
  .u-page {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }
  .u-address {
    font-size: 13px;
  }
  .u-contact {
    font-size: 12px;
  }
  .u-buyerMemo {
    font-size: 12px;
  }
  .u-orderStatus {
    font-size: 12px;
  }
  .u-mobile {
    font-size: 12px;
  }
  .u-createTime {
    font-size: 12px;
  }
}
</style>
