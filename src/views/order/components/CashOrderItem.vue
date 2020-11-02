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
      <div style="width: 20%">{{ item.quantity }}</div>
      <div style="width: 20%">¥{{ item.paidFee.toFixed(2) }}</div>
    </div>
    <div class="u-order__footer">
      <el-button class="yc-edit mr-1" size="small" @click="doPrint">打印小票</el-button>
      <div>总计：¥{{ info.paidFee.toFixed(2) }}</div>
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
  computed: {
    ...mapState({
      storeInfo: state => state.store.store
    })
  },
  methods: {
    doPrint() {
      const orderInfo = {
        ...this.info,
        skuJsonString: JSON.parse(this.info.skuJson)
      }
      console.log('>>>> ORDERinFO', orderInfo)
      printCasherOrder(this.storeInfo, orderInfo)
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
}
</style>
