<template>
  <product-detail :is-edit="false"></product-detail>
</template>

<script>
import ProductDetail from './ProductDetail'
export default {
  name: 'productCreate',
  components: { ProductDetail }
}
</script>
