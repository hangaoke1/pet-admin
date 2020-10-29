<template>
  <el-date-picker
    v-model="form[info.key]"
    style="width: 250px;"
    type="daterange"
    size="small"
    range-separator="至"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :clearable="info.clearable"
    :picker-options="pickerOptions"
  ></el-date-picker>
</template>

<script>
import { recentWeek, recentMonth } from '@/utils/date'
export default {
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    info: {
      type: Object,
      default: () => ({})
    },
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '开始日期'
    }
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              picker.$emit('pick', recentWeek())
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              picker.$emit('pick', recentMonth())
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              picker.$emit('pick', recentMonth(-3))
            }
          }
        ]
      },
    }
  }
}
</script>
