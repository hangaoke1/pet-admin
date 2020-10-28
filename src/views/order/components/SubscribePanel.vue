<template>
  <div>
    <div class="u-wrap flex align-center justify-center">
      <el-calendar class="u-calendar flex-0" v-model="date"></el-calendar>
      <div class="u-todo flex-0">
        <div class="u-todo__title">预约列表(30)</div>
        <div class="u-todo__list">
          <div class="u-todo__item box-shadow" v-for="item in 20" :key="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import orderApi from '@/api/order'
export default {
  data() {
    return {
      date: new Date()
    }
  },
  watch: {
    date() {
      // 获取列表
      this.getList()
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      orderApi
        .subscribeOrderQuery({
          pageNo: 1,
          pageSize: 999,
          startTime: this.date,
          endTime: this.date,
          orderStatus: 100
        })
        .then(res => {})
    }
  }
}
</script>

<style lang="less" scoped>
.u-wrap {
  overflow-x: auto;
}
.u-calendar {
  width: 400px;
  /deep/ .el-calendar-table .el-calendar-day {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 51px;
  }
  /deep/ .el-calendar-table td {
    border: none;
  }
  /deep/ .el-calendar-table td.is-selected {
    background-color: #ff7013;
    color: #fff;
    border-radius: 8px;
  }
  /deep/ .el-calendar-table .el-calendar-day:hover {
    background-color: #ff7013;
    color: #fff;
    border-radius: 8px;
  }
}
.u-todo {
  margin-left: 20px;
  width: 500px;
  height: 600px;
  border-radius: 10px;
  background: #f29543;
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title {
    flex: 0 0 auto;
    width: 200px;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin: 0 auto;
    font-size: 20px;
    padding: 5px 0;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  &__list {
    width: 500px;
    flex: 1;
    overflow: auto;
  }
  &__item {
    width: 400px;
    height: 200px;
    background: #fff;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 10px;
  }
}
</style>
