<template>
  <el-date-picker
    v-model="form[info.key]"
    style="width: 180px;"
    size="small"
    type="date"
    :clearable="info.clearable"
    :placeholder="info.placeholder || '选择日期'"
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
