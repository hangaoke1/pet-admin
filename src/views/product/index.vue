<template>
  <div class="p-2">
    <yc-tabs v-model="current" :options="['商品管理', 'SKU管理'].map(v=> ({ label: v, value: v}))"></yc-tabs>
    <yc-block>
      <product-list v-if="current === '商品管理'"></product-list>
      <sku-list v-if="current === 'SKU管理'"></sku-list>
    </yc-block>
  </div>
</template>

<script>
import YcTabs from '@/components/YcTabs'
import YcBlock from '@/components/YcBlock'
import ProductList from './components/ProductList'
import SkuList from './components/SkuList'

export default {
  name: 'Product',
  components: {
    YcTabs,
    YcBlock,
    ProductList,
    SkuList
  },
  data() {
    return {
      current: '商品管理'
    }
  }
}
</script>
