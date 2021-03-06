<template>
  <div>
    <div class="u-wrap flex align-center justify-center">
      <el-calendar class="u-calendar flex-0" style="width: 400px" v-model="date">
        <template slot="dateCell" slot-scope="scope">
          <div style="position: relative">
            <span>{{ scope.date.getDate() }}</span>
            <span class="u-count" v-if="getCount(scope.data.day)">{{ getCount(scope.data.day) }}</span>
          </div>
        </template>
      </el-calendar>
      <div class="u-todo flex-0">
        <div class="u-todo__title">
          <span v-if="reserveOrderStatus === 100">预约列表</span>
          <span v-if="reserveOrderStatus === 200">完成列表</span>
          <span>({{ total }})</span>
        </div>
        <yc-radio v-model="reserveOrderStatus" :options="statusOptions" @change="getList"></yc-radio>
        <div class="u-todo__list">
          <div class="u-todo__item box-shadow" v-for="(item, index) in list" :key="index">
            <div class="flex p-2">
              <el-avatar class="flex-0 mr-1" :size="60" :src="item.petRecord.avatar"></el-avatar>
              <div class="flex-1 flex justify-between">
                <div style="margin-top: 5px">
                  <div class="font-weight-bold font-s-14 mb-1">
                    <span>{{ item.petRecord.petName }}</span>
                    <span
                      v-if="item.petRecord.sex === 0"
                      class="yc-icon yc-icon-gong"
                      style="color: #1890ff"
                    ></span>
                    <span v-else class="yc-icon yc-icon-mu" style="color: #eb2f96"></span>
                  </div>
                  <el-tag size="mini" effect="dark" class="font-s-11">{{ item.petRecord.petBreed }}</el-tag>
                </div>
                <el-popover
                  placement="top-start"
                  title="联系人"
                  width="200"
                  trigger="hover"
                  :content="item.user.name + ' ' + item.user.mobile "
                >
                  <span
                    slot="reference"
                    class="yc-icon yc-icon-lianxiren"
                    style="color: #e5a5fb;font-size: 24px;cursor: pointer;"
                  ></span>
                </el-popover>
              </div>
            </div>
            <div class="px-2 pb-1">
              <service-item
                v-for="(sv, subIndex) in JSON.parse(item.reserveWash.service)"
                :key="subIndex"
                :info="sv"
              ></service-item>
            </div>
            <div class="text-right font-s-12 px-2">
              <div class="u-todo__price">
                <span class="u-todo__price-label">应付款：</span>
                <div class="u-todo__price-content">
                  <span
                    class="u-todo__price-val f-number"
                  >{{ (item.reserveWash.totalFee - item.reserveWash.discountFee).toFixed(2) }}</span>
                  <span class="u-todo__price-unit">元</span>
                </div>
              </div>

              <div class="u-todo__price">
                <span class="u-todo__price-label">实付款：</span>
                <div class="u-todo__price-content">
                  <span class="u-todo__price-val f-number">{{ item.reserveWash.paidFee.toFixed(2) }}</span>
                  <span class="u-todo__price-unit">元</span>
                </div>
              </div>
            </div>
            <div
              v-if="item.reserveWash.reserveOrderStatus === 100"
              class="u-action flex align-center justify-center"
              @click="finishService(item)"
            >完成服务</div>
            <div
              v-if="item.reserveWash.reserveOrderStatus === 200"
              class="u-finish flex align-center justify-center"
            >已完成</div>
          </div>
          <div
            style="height: 100%"
            class="flex align-center justify-center text-bai font-weight-bold font-s-2"
            v-if="!loading && list.length === 0"
          >暂无预约</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import orderApi from '@/api/order'
import ServiceItem from './ServiceItem.vue'
import YcRadio from '@/components/YcRadio'
export default {
  components: {
    ServiceItem,
    YcRadio
  },
  data() {
    return {
      statusOptions: [
        {
          label: '待服务',
          value: 100
        },
        {
          label: '已完成',
          value: 200
        }
      ],
      loading: false,
      date: new Date(),
      reserveOrderStatus: 100,
      total: 0,
      list: [],
      countMap: {}
    }
  },
  watch: {
    date() {
      // 获取列表
      this.reserveOrderStatus = 100
      this.getList()
    }
  },
  mounted() {
    this.getList()
    this.getDateCount()
  },
  methods: {
    getCount(day) {
      return this.countMap[day]
    },
    getDateStr(v) {
      return dayjs(v).format('YYYY-MM-DD')
    },
    getDateCount() {
      const startReserveTime = dayjs().add(-1, 'month').format('YYYY-MM-DD')
      const endReserveTime = dayjs().add(1, 'month').format('YYYY-MM-DD')
      orderApi
        .subscribeOrderCalendar({
          startReserveTime,
          endReserveTime,
          reserveOrderStatus: 100
        })
        .then(res => {
          const list = res.data || []
          list.forEach(v => {
            this.countMap[v.date] = v.count
          })
          this.date = new Date()
        })
    },
    // 执行完成
    finishService(row) {
      const orderId = row.reserveWash.id
      this.$confirm('该订单是否已服务完成?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          orderApi
            .subscribeOrderFinish({
              orderId
            })
            .then(() => {
              this.$message({
                type: 'success',
                message: '操作成功!'
              })
              this.getList()
            })
            .catch(err => {
              this.$message.error(err.message)
            })
        })
        .catch(() => {})
    },
    getList() {
      this.loading = true
      orderApi
        .subscribeOrderQuery({
          pageNo: 1,
          pageSize: 999,
          reserveTime: dayjs(this.date).format('YYYY-MM-DD'),
          reserveOrderStatus: this.reserveOrderStatus,
          sort: {}
        })
        .then(res => {
          this.list = res.data.items
          this.total = res.data.totalCount
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
.u-wrap {
  overflow-x: auto;
}
.u-count {
  font-size: 10px;
  position: absolute;
  right: -15px;
  top: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: #ff4d4f;
  color: #fff;
  font-weight: bold;
}
.u-calendar {
  width: 400px;
  /deep/ .el-calendar-table .el-calendar-day {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 51px;
    border-radius: 8px;
  }
  /deep/ .el-calendar-table td {
    border: none;
    border-radius: 8px;
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
  margin-left: 30px;
  width: 500px;
  height: 600px;
  padding: 5px;
  border-radius: 10px;
  background: #f29543;
  display: flex;
  align-items: center;
  flex-direction: column;
  /deep/ .yc-radio {
    font-weight: bold;
    color: #fff;
  }

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
    font-weight: bold;
  }
  &__list {
    width: 100%;
    flex: 1;
    overflow: auto;
    padding-top: 20px;

    &::-webkit-scrollbar {
      width: 6px;
      height: 5px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  &__item {
    box-sizing: border-box;
    width: 400px;
    background: #fff;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: all 300ms;
    &:hover {
      box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.1);
    }
  }
  &__price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    margin-bottom: 5px;
    &-content {
      width: 70px;
    }
    &-val {
      font-size: 16px;
      font-weight: 500;
    }
    &-unit {
      font-size: 12px;
    }
  }
  .u-action {
    font-size: 15px;
    padding: 15px 0;
    border-top: 1px solid #eee;
    font-weight: bold;
    color: #f29543;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      opacity: 0.7;
    }
  }
  .u-finish {
    font-size: 15px;
    padding: 15px 0;
    border-top: 1px solid #eee;
    font-weight: bold;
    color: #52c41a;
  }
}
</style>
