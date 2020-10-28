<template>
  <div class="u-serivceItem flex align-center p-1">
    <el-image
      class="u-serviceItem__img mr-2 flex-0"
      :src="info.image | fmtWebp"
      fit="fill"
      lazy
      webp
      :preview-src-list="[info.image]"
    />
    <div class="mr-2 font-s-14">{{ info.name }}</div>
    <div>
      <span class="font-s-1">¥</span>
      <span class="font-s-12">{{ info.price }}</span>
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
