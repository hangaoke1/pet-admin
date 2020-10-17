<template>
  <div class="p-2">
    <div class="bg-bai p-3" v-if="orderInfo">
      <el-steps :active="process" align-center process-status="process">
        <el-step title="提交订单" description></el-step>
        <el-step title="支付订单" description></el-step>
        <el-step title="平台发货" description></el-step>
        <el-step title="确认收货" description></el-step>
      </el-steps>
      <div class="my-2 p-2 flex align-center flex-column justify-center bg-card">
        <div class="mb-2">
          当前订单状态：
          <span class="font-weight-bold">{{ statusMap[orderInfo.order.orderStatus] }}</span>
        </div>
        <div>
          <el-button type="primary" plain>修改收货人信息</el-button>
          <el-button type="success" plain>关闭订单</el-button>
          <el-button type="info" plain>订单跟踪</el-button>
          <el-button type="warning" plain>备注订单</el-button>
        </div>
      </div>

      <div>
        <div class="u-title">基本信息</div>
        <div class="u-table">
          <el-table :data="[orderInfo.order]">
            <el-table-column prop="orderId" label="订单号" align="center"></el-table-column>
            <el-table-column prop="nickName" label="用户账号" align="center">
              <template>
                <span>{{ orderInfo.user.nickName }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="payType" label="支付方式" align="center">
              <template>
                <span>微信</span>
              </template>
            </el-table-column>
            <el-table-column prop="logisticsName" label="物流公司" align="center"></el-table-column>
            <el-table-column prop="logisticsNo" label="物流单号" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="u-title">收货人信息</div>
        <div class="u-table">
          <el-table :data="[orderInfo.userAddress]">
            <el-table-column prop="contact" label="收货人" align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号" align="center"></el-table-column>
            <el-table-column prop="address" label="收货地址" align="center">
              <template slot-scope="{row}">
                <span>{{ row.province }}</span>
                <span>{{ row.city }}</span>
                <span>{{ row.area }}</span>
                <span>{{ row.detail }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="u-title">商品信息</div>
        <div class="u-table">
          <el-table :data="orderInfo.orderItemList">
            <el-table-column prop="skuCode" label="商品编号" align="center">
              <template slot-scope="{row}">{{ row.productSku.skuCode }}</template>
            </el-table-column>
            <el-table-column prop="name" label="商品图片" align="center">
              <template slot-scope="{row}">
                <el-image style="width: 60px;height: 60px" :src="row.productSku.skuImgUrl"></el-image>
              </template>
            </el-table-column>
            <el-table-column label="商品规格" align="center">
              <template slot-scope="{row}">
                <div>
                  <div
                    v-for="item in row.productSku.specs"
                    :key="item.type"
                  >{{ item.name }}{{ item.value }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="价格" align="center">
              <template slot-scope="{row}">
                <span>{{ row.productSku.price }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="quantity" label="数量" align="center"></el-table-column>
            <el-table-column prop="totalFee" label="小计" align="center"></el-table-column>
          </el-table>
          <div class="p-2 text-right text-red font-s-14">合计：¥{{ orderInfo.order.totalFee }}元</div>
        </div>
        <div class="u-title">费用信息</div>
        <div class="u-table">
          <el-table :data="[orderInfo.order]">
            <el-table-column prop="totalFee" label="商品合计" align="center">
              <template slot-scope="{row}">
                <span>¥{{ row.totalFee }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="postFee" label="运费" align="center">
              <template slot-scope="{row}">
                <span>¥{{ row.postFee }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="discountFee" label="优惠券" align="center">
              <template slot-scope="{row}">
                <span>¥{{ row.discountFee }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="totalFee" label="订单总金额" align="center">
              <template slot-scope="{row}">
                <span>¥{{ row.totalFee }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="paidFee" label="应付款金额" align="center">
              <template slot-scope="{row}">
                <span>¥{{ row.paidFee }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import showOrderApi from '@/api/shopOrder'
export default {
  name: 'ShopOrderDetail',
  data() {
    return {
      orderInfo: null,
      statusMap: {
        100: '待支付',
        200: '待发货',
        300: '待收货',
        400: '已完成',
        500: '已取消'
      },
      statusOptions: [
        { label: '待支付', value: 100 },
        { label: '待发货', value: 200 },
        { label: '待收货', value: 300 },
        { label: '已完成', value: 400 },
        { label: '已取消', value: 900 }
      ]
    }
  },
  computed: {
    process() {
      const status = _.get(this.orderInfo, 'order.orderStatus')
      if (status === 100) {
        return 0
      }
      if (status === 200) {
        return 1
      }
      if (status === 300) {
        return 2
      }
      if (status === 400) {
        return 3
      }
      if (status === 900) {
        return 3
      }
      return 0
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      showOrderApi
        .queryOrder({
          orderId: this.$route.query.orderId
        })
        .then(res => {
          this.orderInfo = res.data.items[0]
        })
    }
  }
}
</script>

<style lang="less" scoped>
.u-title {
  padding: 20px 0;
  font-weight: 500;
  color: #333;
  font-size: 16px;
}
.u-table {
  max-width: 1113px;
}
</style>
