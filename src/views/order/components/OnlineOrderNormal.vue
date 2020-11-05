<template>
  <div class="u-shopOrder">
    <!-- 查询条件 -->
    <div class="pb-1 border-bottom-divider flex align-center justify-between">
      <yc-radio
        class="flex-0"
        :options="statusOptions"
        v-model="listQuery.orderStatus"
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
      <el-table-column label="订单状态" width="120" align="center">
        <template slot-scope="{row}">
          <el-tag :type="colorMap[row.order.orderStatus]">{{ textMap[row.order.orderStatus] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="订单总价(元)" width="150" align="center">
        <template slot-scope="{row}">
          <span class="f-number font-s-14">{{ row.order.totalFee.toFixed(2) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="收货地址" min-width="300" align="center">
        <template slot-scope="{row}">
          <div v-if="row.userAddress" class="px-2 text-left">
            <div class="u-address">
              <span>{{ row.userAddress.province }}</span>
              <span>{{ row.userAddress.city }}</span>
              <span>{{ row.userAddress.area }}</span>
              <span>{{ row.userAddress.detail }}</span>
            </div>
            <div>
              <span class="u-contact">{{ row.userAddress.contact }}</span>
              <span class="u-mobile">{{ row.userAddress.mobile }}</span>
            </div>
          </div>
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
      <el-table-column label="操作" min-width="250" fixed="right" align="center">
        <template slot-scope="{row}">
          <el-button size="mini" class="yc-btn" @click="goDetail(row)">详情</el-button>
          <el-button size="mini" class="yc-del" @click="doPrint(row)">打印小票</el-button>
          <el-button
            v-if="row.order.orderStatus == 200"
            class="yc-del"
            size="mini"
            @click="sendOrder(row)"
          >发货</el-button>
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

    <!-- 发货表单 -->
    <el-dialog title="发货" :visible.sync="dialogFormVisible">
      <el-form :model="sendForm">
        <el-form-item label="物流选择" label-width="120px">
          <el-select v-model="sendForm.logisticsName" placeholder="请选择物流公司">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="运单号" label-width="120px">
          <el-input v-model="sendForm.logisticsNo" autocomplete="off"></el-input>
        </el-form-item>
        <div class="font-s-12 text-hui" style="margin-left: 120px">注意：非商家配送时，需填写运单号</div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmSend">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import orderApi from '@/api/order'
import { printOnlineOrder } from '@/lodop/print'
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
      dialogFormVisible: false,
      sendForm: {
        orderId: '',
        logisticsNo: '',
        logisticsName: ''
      },
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
        { label: '全部订单', value: '' },
        { label: '待支付', value: 100 },
        { label: '待发货', value: 200 },
        { label: '待收货', value: 300 },
        { label: '已完成', value: 400 },
        { label: '已取消', value: 900 }
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
        orderStatus: '',
        date: ''
      },
      pageNo: 1,
      pageSize: 10,
      totalCount: 0,
      loading: false,
      list: []
    }
  },
  computed: {
    ...mapState({
      storeInfo: state => state.store.store
    })
  },
  beforeMount() {
    this.getList()
  },
  methods: {
    doPrint(orderInfo) {
      printOnlineOrder({ storeInfo: this.storeInfo, orderInfo })
    },
    confirmSend() {
      // 非商家配送 必须要单号
      if (this.sendForm.logisticsName !== '商家配送' && !this.sendForm.logisticsNo) {
        return this.$message.error('运单号不能为空')
      }
      this.$confirm('该订单是否已经发货?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          orderApi
            .onlineOrderShip(this.sendForm)
            .then(() => {
              this.$notify({
                title: '成功',
                message: '发货成功',
                type: 'success'
              })
              this.getList()
              this.dialogFormVisible = false
            })
            .catch(err => {
              this.$message.error(err.message)
            })
        })
        .catch(() => {})
    },
    // 前往详情
    goDetail(row) {
      this.$router.push(`/order/onlineOrderDetail?orderId=${row.order.orderId}`)
    },
    // 发货
    sendOrder(row) {
      const orderId = row.order.orderId
      this.sendForm = {
        orderId: orderId,
        logisticsNo: '',
        logisticsName: '商家配送'
      }
      this.dialogFormVisible = true
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
          orderStatus: this.listQuery.orderStatus,
          warrantyStatus: 0,
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
  .u-product__item {
    display: flex;
    font-size: 12px;
    margin-bottom: 10px;
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
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
