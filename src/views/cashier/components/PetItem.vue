<template>
  <div class="u-pet box-shadow mb-2">
    <el-avatar class="mr-1 flex-0" :size="45" :src="info.avatar"></el-avatar>
    <div class="flex-1">
      <div class="mb-1">
        <span class="font-weight-bold font-s-14">{{ info.petName }}</span>
        <span v-if="info.sex === 0" class="yc-icon yc-icon-gong" style="color: #1890ff"></span>
        <span v-else class="yc-icon yc-icon-mu" style="color: #eb2f96"></span>
      </div>
      <span class="u-pet__tag">{{ info.petBreed }}</span>
      <span class="u-pet__tag" v-if="info.petWeight">{{ info.petWeight }}kg</span>
      <span class="u-pet__tag">{{ getYear(info.birthday) }}岁</span>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'PetItem',
  props: {
    info: Object
  },
  methods: {
    getYear(date) {
      return (dayjs().diff(date, 'month') / 12).toFixed(1)
    }
  }
}
</script>

<style lang="less" scoped>
.u-pet {
  display: flex;
  align-items: center;
  font-size: 13px;
  border-radius: 8px;
  padding: 15px;
  &__tag {
    font-size: 10px;
    background-color: rgba(255, 225, 0, 0.56);
    border-radius: 10px;
    padding: 3px 6px;
    margin-left: 6px;
    float: right;
  }
}
</style>
