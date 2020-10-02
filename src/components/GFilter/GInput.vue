<template>
  <el-input
    style="width: 180px;"
    v-model="form[info.key]"
    size="small"
    :clearable="info.clearable"
    :placeholder="info.placeholder || '请输入'"
  />
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    info: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>
</style>
