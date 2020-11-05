<template>
  <div class="u-order">
    <div class="u-order__header">
      <div class="flex justify-between align-center">
        <span>交易单号：{{ info.orderId }}</span>
        <span>创建时间：{{ info.createTime }}</span>
      </div>
    </div>
    <div
      class="u-order__product flex align-center p-2 text-center border-bottom-divider"
      v-for="(item, index) in JSON.parse(info.skuJson)"
      :key="index"
    >
      <div style="width: 80px">
        <img v-if="item.imgUrl" style="width: 50px;height: 50px;" :src="item.imgUrl" alt />
      </div>
      <div style="width: 30%">{{ item.name }}</div>
      <div style="width: 20%" class="f-number">{{ item.quantity }}</div>
      <div style="width: 20%" class="f-number">¥ {{ item.price.toFixed(2) }}</div>
    </div>
    <div class="u-payType flex align-center justify-end font-s-13 font-weight-bold px-2 mt-2">
      <span>支付方式：</span>
      <el-avatar :src="payIconMap[info.payType]" :size="20"></el-avatar>
      <span style="margin-left: 2px">{{ payMap[info.payType] }}</span>
    </div>
    <div class="u-order__footer">
      <el-button class="yc-edit mr-1" size="small" @click="doPrint">打印小票</el-button>
      <div class="f-number font-s-13">
        <span>已优惠：</span>
        <span class="text-red mr-1">¥ {{ info.discountFee.toFixed(2) }}</span>
        <span>实付：¥</span>
        <span class="font-s-2">{{ info.paidFee.toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { printCasherOrder } from '@/lodop/print'
export default {
  name: 'OrderItem',
  props: {
    info: Object
  },
  data() {
    return {
      payList: [
        {
          label: '微信',
          value: 0,
          icon: require('../../../assets/wechatpay.png')
        },
        {
          label: '支付宝',
          value: 1,
          icon: require('../../../assets/alipay.png')
        },
        {
          label: '现金',
          value: 2,
          icon: require('../../../assets/cashpay.png')
        },
        {
          label: '余额',
          value: 3,
          icon: require('../../../assets/balancepay.png')
        }
      ]
    }
  },
  computed: {
    ...mapState({
      storeInfo: state => state.store.store
    }),
    payIconMap() {
      const m = {}
      this.payList.forEach(v => {
        m[v.value] = v.icon
      })
      return m
    },
    payMap() {
      const m = {}
      this.payList.forEach(v => {
        m[v.value] = v.label
      })
      return m
    }
  },
  methods: {
    doPrint() {
      const orderInfo = {
        ...this.info,
        skuJsonString: JSON.parse(this.info.skuJson)
      }
      printCasherOrder({ storeInfo: this.storeInfo, orderInfo })
    }
  }
}
</script>

<style lang="less" scoped>
.u-order {
  color: #333;
  font-size: 13px;
  &__header {
    padding: 20px;
    background: #f5f5f5;
    font-size: 14px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .u-payType {
    /deep/ img {
      background: #fff;
    }
  }
}
</style>
