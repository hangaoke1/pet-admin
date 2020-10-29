<template>
  <div class="u-storeOrder">
    <!-- 查询条件 -->
    <div class="pb-1 border-bottom-divider flex justify-between align-center">
      <div>
        <el-input
          v-model="listQuery.orderId"
          placeholder="请输入订单号"
          style="width: 200px;"
          class="filter-item"
          clearable
          size="small"
          suffix-icon="el-icon-search"
          @keyup.enter.native="getList"
        />
        <el-select
          v-model="listQuery.orderStatus"
          class="filter-item"
          placeholder="订单状态"
          clearable
          size="small"
          @change="getList"
        >
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-date-picker
          v-model="listQuery.date"
          class="filter-item"
          type="daterange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="预约日期"
          end-placeholder="预约日期"
          align="right"
          size="small"
          :default-time="['00:00:00', '23:59:59']"
          @change="getList"
        ></el-date-picker>
      </div>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        size="small"
        @click="getList"
      >查询</el-button>
    </div>

    <!-- 数据表格 -->
    <el-table
      v-loading="loading"
      :data="list"
      size="small"
      class="mt-1"
      highlight-current-row
      style="width: 100%"
      header-row-class-name="u-tabel__header"
      @sort-change="handleSort"
    >
      <el-table-column align="center" label="订单编号" width="150">
        <template slot-scope="{row}">
          <span>{{ row.reserveWash.id }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="reserveTime" label="预约时间" width="200" sortable="custom">
        <template slot-scope="{row}">
          <span>{{ fmtDate(row.reserveWash.reserveTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="服务内容" width="200">
        <template slot-scope="{row}">
          <div v-for="item in JSON.parse(row.reserveWash.service)" :key="item.id">
            <service-item :info="item"></service-item>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="服务对象" width="150">
        <template slot-scope="{row}">
          <div>{{ row.petRecord.petName }} {{ sexMap[row.petRecord.sex] || '未知' }} {{ getPetYear(row.petRecord.birthday) }}</div>
          <div>
            <el-tag>{{ row.petRecord.petBreed }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="订单金额" width="150">
        <template slot-scope="{row}">
          <span>¥ {{ row.reserveWash.totalFee }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="实付金额" width="150">
        <template slot-scope="{row}">
          <span>¥ {{ row.reserveWash.paidFee }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="订单状态" width="150">
        <template slot-scope="{row}">
          <span
            :style="{color: colorMap[row.reserveWash.reserveOrderStatus]}"
          >{{ textMap[row.reserveWash.reserveOrderStatus] }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="宠物种类" width="150">
        <template slot-scope="{row}">
          <el-tag v-if="row.petRecord.petType == 1" size="medium">狗</el-tag>
          <el-tag v-else size="medium" type="danger">猫</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="预约人" width="150">
        <template slot-scope="{row}">
          <div>{{ row.user.nickName }}</div>
          <div>{{ row.reserveWash.mobile }}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间" min-width="160">
        <template slot-scope="{row}">
          <span>{{ row.reserveWash.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="200" fixed="right">
        <template slot-scope="{row}">
          <el-button type="text" size="mini" style="color: #0471CA;" @click="goDetail(row)">查看详情</el-button>
          <el-button
            v-if="row.reserveWash.reserveOrderStatus == 100"
            type="warning"
            size="mini"
            @click="finishService(row)"
          >执行完成</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 底部分页 -->
    <div class="u-page">
      <el-pagination
        background
        :current-page="pageNo"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import waves from '@/directive/waves'
import orderApi from '@/api/order'
import getPetYear from '@/lib/getPetYear'
import { recentWeek, recentMonth } from '@/utils/date'
import ServiceItem from './ServiceItem.vue'

export default {
  name: 'SubscribeOrder',
  components: {
    ServiceItem
  },
  directives: { waves },
  data() {
    return {
      sexMap: {
        0: '公',
        1: '母'
      },
      textMap: {
        0: '待支付',
        100: '已预约',
        200: '已完成',
        900: '已取消'
      },
      colorMap: {
        0: '#F24957',
        100: '#FFAF0F',
        200: '#67C23A',
        900: '#909399'
      },
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
      statusOptions: [
        { label: '待支付', value: 0 },
        { label: '已预约', value: 100 },
        { label: '已完成', value: 200 },
        { label: '已取消', value: 900 }
      ],
      filterMore: false,
      listQuery: {
        orderStatus: '',
        date: '',
        sort: {}
      },
      pageNo: 1,
      pageSize: 20,
      totalCount: 0,
      loading: false,
      list: []
    }
  },
  beforeMount() {
    this.getList()
  },
  methods: {
    handleSort(info) {
      if (info.order) {
        this.listQuery.sort[info.prop] = info.order === 'ascending' ? 'asc' : 'desc'
      } else {
        this.listQuery.sort = {}
      }
      this.getList()
    },
    fmtDate(v) {
      return dayjs(v).format('YYYY-MM-DD HH:mm')
    },
    getPetYear(br) {
      return getPetYear(br)
    },
    // 前往详情
    goDetail(row) {
      // this.$router.push('/order/detail')
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
              row.reserveWash.reserveOrderStatus = 200
              this.$message({
                type: 'success',
                message: '操作成功!'
              })
            })
            .catch(err => {
              this.$message.error(err.message)
            })
        })
        .catch(() => {})
    },
    getList() {
      this.loading = true
      let startReserveTime = ''
      let endReserveTime = ''
      if (this.listQuery.date) {
        startReserveTime = dayjs(this.listQuery.date[0]).format('YYYY-MM-DD HH:mm:ss')
        endReserveTime = dayjs(this.listQuery.date[1]).format('YYYY-MM-DD HH:mm:ss')
      }
      orderApi
        .subscribeOrderQuery({
          startReserveTime,
          endReserveTime,
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          orderId: this.listQuery.orderId,
          reserveOrderStatus: this.listQuery.orderStatus,
          sort: this.listQuery.sort
        })
        .then(res => {
          this.list = res.data.items
          this.totalCount = res.data.totalCount
        })
        .catch(err => {
          this.$message.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getList()
    },
    handleCurrentChange(pageNo) {
      this.pageNo = pageNo
      this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
.u-storeOrder {
  color: #333;
  .u-page {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }
  .u-product__item {
    display: flex;
    font-size: 12px;
    margin-bottom: 10px;
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }
  .u-sku {
    &__img {
      flex: 0 0 auto;
    }
    &__name {
      margin-left: 10px;
      margin-right: 10px;
      flex: 1;
      font-size: 12px;
      line-height: 14px;
    }
    &__specs {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
    &__price {
      flex: 0 0 auto;
      font-size: 12px;
      line-height: 12px;
    }
    &__quantity {
      margin-left: 10px;
      flex: 0 0 auto;
      font-size: 12px;
      line-height: 12px;
    }
  }
  .u-address {
    font-size: 12px;
  }
  .u-contact {
    font-size: 12px;
  }
  .u-buyerMemo {
    font-size: 12px;
  }
  .u-orderStatus {
    font-size: 12px;
  }
  .u-mobile {
    font-size: 12px;
  }
  .u-createTime {
    font-size: 12px;
  }
  .u-totalFee {
    text-align: center;
  }
}
</style>
