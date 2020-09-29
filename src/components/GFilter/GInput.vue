<template>
  <el-form-item :label="info.name">
    <el-input
      style="width: 100%;"
      v-model="form[info.key]"
      size="small"
      :clearable="info.clearable"
      :placeholder="info.placeholder || '请输入'"
    />
  </el-form-item>
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
