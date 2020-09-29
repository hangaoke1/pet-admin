<template>
  <el-form-item :label="info.name">
    <el-date-picker
      v-model="form[info.key]"
      style="width: 100%;"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :clearable="info.clearable"
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
