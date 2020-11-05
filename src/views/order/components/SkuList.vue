<template>
  <div class="u-product__list py-1">
    <div v-for="item in [info.orderItemList[0]]" :key="item.id" class="u-product__item pr-2">
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
        <div class="ellipsis-2">{{ item.productSku.skuName }}</div>
        <div class="u-sku__specs text-hui2">{{ getSpecs(item.productSku) }}</div>
      </div>
      <div class="u-sku__info">
        <div class="u-sku__price">
          <span class="font-s-1">¥</span>
          <span class="font-s-13 f-number">{{ item.productSku.price }}</span>
        </div>
        <div class="u-sku__quantity">
          <span class="el-icon-close font-s-1"></span>
          <span class="font-s-13 f-number">{{ item.quantity }}</span>
        </div>
      </div>
    </div>
    <div v-if="info.orderItemList.length > 1">
      <span>等</span>
      <span class="font-weight-bold" style="padding: 0 2px">{{ info.orderItemList.length }}</span>
      <span>件商品</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkuList',
  props: {
    info: Object
  },
  methods: {
    getSpecs(productSku) {
      return productSku.specs.map(s => s.name + '/' + s.value).join('/')
    }
  }
}
</script>

<style lang="less" scoped>
.u-product__item {
  display: flex;
  align-items: flex-start;
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
  }
  &__specs {
    margin-top: 5px;
    font-size: 10px;
  }
  &__info {
    display: flex;
    align-items: center;
  }
  &__price {
    flex: 0 0 auto;
    font-size: 12px;
    line-height: 12px;
  }
  &__quantity {
    margin-left: 10px;
    flex: 0 0 auto;
  }
}
</style>
