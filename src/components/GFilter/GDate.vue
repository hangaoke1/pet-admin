<template>
  <el-form-item :label="info.name">
    <el-date-picker
      v-model="form[info.key]"
      style="width: 100%;"
      size="small"
      type="date"
      :clearable="info.clearable"
      :placeholder="info.placeholder || '选择日期'"
    ></el-date-picker>
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
