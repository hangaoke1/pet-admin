<template>
  <div class="yc-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YcBlock'
}
</script>

<style lang="less" scoped>
.yc-block {
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  overflow: hidden;
}
</style>
