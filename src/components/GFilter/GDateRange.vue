<template>
  <el-date-picker
    v-model="form[info.key]"
    style="width: 180px;"
    type="daterange"
    size="small"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :clearable="info.clearable"
  ></el-date-picker>
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
