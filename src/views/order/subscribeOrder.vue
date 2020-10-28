<template>
  <div class="p-2">
    <yc-tabs v-model="current" :options="['今日预约', '所有预约'].map(v=> ({ label: v, value: v}))"></yc-tabs>
    <yc-block>
      <subscribe-panel v-if="current === '今日预约'"></subscribe-panel>
      <subscribe-all v-if="current === '所有预约'"></subscribe-all>
    </yc-block>
  </div>
</template>

<script>
import YcTabs from '@/components/YcTabs'
import YcBlock from '@/components/YcBlock'
import SubscribeAll from './components/SubscribeAll'
import SubscribePanel from './components/SubscribePanel'

export default {
  name: 'Product',
  components: {
    YcTabs,
    YcBlock,
    SubscribeAll,
    SubscribePanel
  },
  data() {
    return {
      current: '今日预约'
    }
  }
}
</script>
