<template>
  <product-detail :is-edit="true"></product-detail>
</template>

<script>
import ProductDetail from './ProductDetail'
export default {
  name: 'productEdit',
  components: { ProductDetail }
}
</script>
