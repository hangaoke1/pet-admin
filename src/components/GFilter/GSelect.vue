<template>
  <el-select
    style="width: 180px;"
    v-model="form[info.key]"
    size="small"
    :placeholder="info.placeholder || '请选择'"
    :clearable="info.clearable"
  >
    <el-option
      v-for="item in info.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
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
