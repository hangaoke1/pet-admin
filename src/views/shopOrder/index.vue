<template>
  <div class="u-shopOrder p-2">
    <!-- 查询条件 -->
    <div class="filter-container">
      <el-input
        v-model="listQuery.orderId"
        placeholder="请输入订单号"
        style="width: 200px;"
        class="filter-item"
        clearable
        size="small"
        @keyup.enter.native="getList"
      />
      <el-select
        v-model="listQuery.orderStatus"
        class="filter-item"
        placeholder="订单状态"
        clearable
        size="small"
        @change="getList"
      >
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-date-picker
        v-model="listQuery.date"
        class="filter-item"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
        size="small"
        :default-time="['00:00:00', '23:59:59']"
        @change="getList"
      ></el-date-picker>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        size="small"
        @click="getList"
      >查询</el-button>
    </div>

    <!-- 数据表格 -->
    <el-table
      v-loading="loading"
      :data="list"
      highlight-current-row
      style="width: 100%"
      size="mini"
      header-row-class-name="u-tabel__header"
    >
      <el-table-column label="订单编号" width="180" align="center">
        <template slot-scope="{row}">
          <span>{{ row.order.orderId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品详情" min-width="300">
        <template slot-scope="{row}">
          <div class="u-product__list p-1">
            <div v-for="item in row.orderItemList" :key="item.id" class="u-product__item pr-2">
              <el-image
                class="u-sku__img"
                style="width: 50px; height: 50px"
                :src="item.productSku.skuImgUrl"
                fit="fill"
                lazy
                webp
                :preview-src-list="[item.productSku.skuImgUrl]"
              />
              <div class="u-sku__name">
                <div>{{ item.productSku.skuName }}</div>
                <div class="u-sku__specs text-hui2">{{ getSpecs(item.productSku) }}</div>
              </div>
              <div class="u-sku__price">
                <span class="font-s-1" style="margin-right: 3px">¥</span>
                {{ item.productSku.price }}
              </div>
              <div class="u-sku__quantity">x{{ item.quantity }}</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" width="120" align="center">
        <template slot-scope="{row}">
          <el-tag :type="colorMap[row.order.orderStatus]">{{ textMap[row.order.orderStatus] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="订单总价(元)" width="150" align="center">
        <template slot-scope="{row}">
          <span>¥ {{ row.order.totalFee }}</span>
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
      <el-table-column prop="logisticsName" align="center" label="物流公司" min-width="150"></el-table-column>
      <el-table-column prop="logisticsNo" align="center" label="物流单号" min-width="150"></el-table-column>
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
      <el-table-column label="操作" width="250" fixed="right">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini">查看详情</el-button>
          <el-button
            v-if="row.order.orderStatus == 200"
            type="warning"
            size="mini"
            @click="sendOrder(row)"
          >发货</el-button>
          <!-- <el-button type="danger" size="mini" @click="handleModifyStatus(row,'deleted')">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <!-- 底部分页 -->
    <div class="u-page">
      <el-pagination
        background
        :current-page="pageNo"
        :page-sizes="[10, 30, 50, 100]"
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
import waves from '@/directive/waves'
import shopOrderApi from '@/api/shopOrder'
import { recentWeek, recentMonth } from '@/utils/date'

export default {
  name: 'ShopOrder',
  directives: { waves },
  data() {
    return {
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
        { label: '待支付', value: 100 },
        { label: '待发货', value: 200 },
        { label: '待收货', value: 300 },
        { label: '已完成', value: 400 },
        { label: '已取消', value: 900 }
      ],
      filterMore: false,
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
  beforeMount() {
    this.getList()
  },
  methods: {
    // 发货
    sendOrder(row) {
      const orderId = row.order.orderId
      this.$confirm('该订单是否已经发货?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          shopOrderApi
            .shipOrder({
              orderId
            })
            .then(() => {
              row.order.orderStatus = 300
              this.$message({
                type: 'success',
                message: '操作成功!'
              })
            })
            .catch(err => {
              this.$message.error(err.message)
            })
        })
        .catch(() => {})
    },
    getSpecs(productSku) {
      return productSku.specs.map(s => s.name + '/' + s.value).join('/')
    },
    getList() {
      this.loading = true
      let startTime = ''
      let endTitme = ''
      if (this.listQuery.date) {
        startTime = dayjs(this.listQuery.date[0]).format('YYYY-MM-DD HH:mm:ss')
        endTitme = dayjs(this.listQuery.date[1]).format('YYYY-MM-DD HH:mm:ss')
      }
      shopOrderApi
        .queryOrder({
          startTime,
          endTitme,
          orderId: this.listQuery.orderId,
          orderStatus: this.listQuery.orderStatus,
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
  .u-sku {
    &__img {
      flex: 0 0 auto;
    }
    &__name {
      margin-left: 10px;
      margin-right: 10px;
      flex: 1;
      font-size: 12px;
      line-height: 14px;
    }
    &__specs {
      margin-top: 5px;
      font-size: 10px;
    }
    &__price {
      flex: 0 0 auto;
      font-size: 12px;
      line-height: 12px;
    }
    &__quantity {
      margin-left: 10px;
      flex: 0 0 auto;
      font-size: 12px;
      line-height: 12px;
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
