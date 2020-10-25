<template>
  <div class="u-shopOrder p-2">
    <div class="bg-bai p-3">
      <!-- 查询条件 -->
      <div class="pb-1 border-bottom-divider flex align-center justify-between">
        <div>
          <el-input
            v-model="listQuery.orderId"
            placeholder="请输入订单号"
            style="width: 200px;"
            class="filter-item"
            clearable
            size="small"
            suffix-icon="el-icon-search"
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
        </div>
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
            <div class="u-product__list p-1">
              <div v-for="item in row.orderItemList" :key="item.id" class="u-product__item pr-2">
                <el-image
                  class="u-sku__img"
                  style="width: 50px; height: 50px"
                  :src="item.productSku.skuImgUrl | fmtWebp"
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
        <el-table-column prop="logisticsName" align="center" label="物流公司" min-width="150">
          <template slot-scope="{row}">
            <span>{{ row.order.logisticsName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="logisticsNo" align="center" label="物流单号" min-width="150">
          <template slot-scope="{row}">
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
            <el-button type="text" size="mini" style="color: #0471CA;" @click="goDetail(row)">查看详情</el-button>
            <el-button
              v-if="row.order.orderStatus == 200"
              type="warning"
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
          shopOrderApi
            .shipOrder(this.sendForm)
            .then(() => {
              this.$message({
                type: 'success',
                message: '操作成功!'
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
      this.$router.push(`/order/shopOrderDetail?orderId=${row.order.orderId}`)
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
