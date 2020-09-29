<template>
  <el-form-item :label="info.name">
    <el-select
      v-model="form[info.key]"
      size="small"
      :placeholder="info.placeholder || '请选择'"
      style="width: 100%;"
      :clearable="info.clearable"
    >
      <el-option
        v-for="item in info.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
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
