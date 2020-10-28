<template>
  <div class="p-2">
    <yc-tabs v-model="current" :options="['线下服务', '线上服务'].map(v=> ({ label: v, value: v}))"></yc-tabs>
    <yc-block>
      <offline-service v-if="current === '线下服务'"></offline-service>
      <online-service v-if="current === '线上服务'"></online-service>
    </yc-block>
  </div>
</template>

<script>
import YcTabs from '@/components/YcTabs'
import YcBlock from '@/components/YcBlock'
import OfflineService from './components/OfflineService'
import OnlineService from './components/OnlineService'

export default {
  name: 'Product',
  components: {
    YcTabs,
    YcBlock,
    OfflineService,
    OnlineService
  },
  data() {
    return {
      current: '线下服务'
    }
  }
}
</script>
