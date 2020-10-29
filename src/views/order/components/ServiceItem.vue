<template>
  <div class="u-serivceItem flex align-center p-1">
    <el-image
      class="u-serviceItem__img mr-1 flex-0"
      :src="info.image | fmtWebp"
      fit="fill"
      lazy
      webp
      :preview-src-list="[info.image]"
    />
    <div class="flex-1 mr-1 font-s-14 font-weight-bold">{{ info.name }}</div>
    <div class="flex-0">
      <span class="font-s-12">¥</span>
      <span class="font-s-14 font-weight-bold">{{ info.price.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
.u-serviceItem {
  color: #333;
  &__img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
}
</style>
