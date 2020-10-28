<template>
  <div class="p-2">
    <yc-tabs v-model="current" :options="['线上订单', '退款/售后'].map(v=> ({ label: v, value: v}))"></yc-tabs>
    <yc-block>
      <online-order-normal v-if="current === '线上订单'"></online-order-normal>
      <online-order-refund v-if="current === '退款/售后'"></online-order-refund>
    </yc-block>
  </div>
</template>

<script>
import YcTabs from '@/components/YcTabs'
import YcBlock from '@/components/YcBlock'
import OnlineOrderNormal from './components/OnlineOrderNormal'
import OnlineOrderRefund from './components/OnlineOrderRefund'

export default {
  name: 'Product',
  components: {
    YcTabs,
    YcBlock,
    OnlineOrderNormal,
    OnlineOrderRefund
  },
  data() {
    return {
      current: '线上订单'
    }
  }
}
</script>
