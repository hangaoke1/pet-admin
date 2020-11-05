<template>
  <div class="p-2">
    <div class="bg-bai p-3" v-if="orderInfo">
      <el-steps :active="process" align-center process-status="process">
        <el-step v-for="item in stepOptions" :title="item" :key="item"></el-step>
      </el-steps>
      <div class="my-2 p-2 flex align-center flex-column justify-center bg-card">
        <div class="mb-2">
          订单状态：
          <span class="font-weight-bold">{{ statusMap[orderInfo.order.orderStatus] }}</span>
        </div>
        <div>
          <el-button class="yc-edit" @click="updateAddress">修改收货人信息</el-button>
          <el-button
            class="yc-del"
            @click="closeOrder"
            v-if="orderInfo.order.orderStatus !== 900"
          >关闭订单</el-button>
          <el-button class="yc-del" @click="showLogistics">物流查询</el-button>
          <el-button class="yc-del" @click="addRemark">备注订单</el-button>
        </div>
      </div>

      <div>
        <div class="u-title">基本信息</div>
        <div class="u-table">
          <el-table :data="[orderInfo.order]">
            <el-table-column prop="orderId" label="订单号" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.orderId }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="nickName" label="微信昵称" align="center">
              <template>
                <span>{{ orderInfo.user.nickName }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="payType" label="支付方式" align="center">
              <template>
                <span>微信</span>
              </template>
            </el-table-column>
            <el-table-column prop="logisticsName" label="物流公司" align="center"></el-table-column>
            <el-table-column prop="logisticsNo" label="物流单号" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.logisticsNo }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="sellerMemo" label="备注" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="u-title">收货人信息</div>
        <div class="u-table">
          <el-table :data="[orderInfo.userAddress]">
            <el-table-column prop="contact" label="收货人" align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.mobile }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="收货地址" align="center">
              <template slot-scope="{row}">
                <span>{{ row.province }}</span>
                <span>{{ row.city }}</span>
                <span>{{ row.area }}</span>
                <span>{{ row.detail }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="u-title">商品信息</div>
        <div class="u-table">
          <el-table :data="orderInfo.orderItemList">
            <el-table-column prop="skuCode" label="商品编号" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.productSku.skuCode }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="商品图片" align="center">
              <template slot-scope="{row}">
                <el-image
                  style="width: 60px;height: 60px"
                  :src="row.productSku.skuImgUrl | fmtWebp"
                  lazy
                  webp
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column label="商品规格" align="center">
              <template slot-scope="{row}">
                <div>
                  <div
                    v-for="item in row.productSku.specs"
                    :key="item.type"
                  >{{ item.name }}{{ item.value }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="价格" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.productSku.price.toFixed(2) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="quantity" label="数量" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.quantity }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="totalFee" label="小计(元)" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.totalFee.toFixed(2) }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="u-title">费用信息</div>
        <div class="u-table">
          <el-table :data="[orderInfo.order]">
            <el-table-column prop="totalFee" label="商品合计" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.totalFee.toFixed(2) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="postFee" label="运费" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.postFee.toFixed(2) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="discountFee" label="优惠券" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.discountFee.toFixed(2) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="totalFee" label="订单总金额" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.totalFee.toFixed(2) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="paidFee" label="应付款金额" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.paidFee.toFixed(2) }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <!-- 修改收货人信息 -->
    <el-dialog title="收货地址" :visible.sync="receiverFormVisible">
      <el-form :model="receiverForm" label-width="120px">
        <el-form-item label="收货人">
          <el-input v-model="receiverForm.contact" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="receiverForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <yc-address v-model="receiverForm.addressList" style="width: 250px"></yc-address>
        </el-form-item>
        <el-form-item label="地址详情">
          <el-input v-model="receiverForm.detail" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="receiverFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmUpdateAddress">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 查询物流 -->
    <el-drawer :with-header="false" title="物流轨迹" :visible.sync="drawer" direction="ltr">
      <div class="p-2 font-s-14" v-if="logisticsInfo">
        <div class="mb-2">物流公司：{{ logisticsInfo.typename }}</div>
        <div class="mb-2">物流单号：{{ logisticsInfo.number }}</div>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in logisticsInfo.list"
            :key="index"
            :timestamp="activity.time"
          >{{ activity.status }}</el-timeline-item>
        </el-timeline>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import _ from 'lodash'
import YcAddress from '@/components/YcAddress'

import orderApi from '@/api/order'
export default {
  name: 'OnlineOrderDetail',
  components: {
    YcAddress
  },
  data() {
    return {
      orderInfo: null,
      statusMap: {
        100: '待支付',
        200: '待发货',
        300: '待收货',
        400: '已完成',
        900: '已取消'
      },
      receiverFormVisible: false,
      receiverForm: {
        id: '',
        orderId: '',
        province: '',
        city: '',
        area: '',
        detail: '',
        contact: '',
        mobile: '',
        addressList: []
      },
      drawer: false,
      logisticsInfo: null
    }
  },
  computed: {
    stepOptions() {
      const status = _.get(this.orderInfo, 'order.orderStatus')
      if (status === 900) {
        return ['提交订单', '已取消']
      } else {
        return ['提交订单', '支付订单', '平台发货', '确认收货']
      }
    },
    process() {
      const status = _.get(this.orderInfo, 'order.orderStatus')
      if (status === 100) {
        return 0
      }
      if (status === 200) {
        return 1
      }
      if (status === 300) {
        return 2
      }
      if (status === 400) {
        return 3
      }
      if (status === 900) {
        return 1
      }
      return 0
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    // 查询物流信息
    showLogistics() {
      if (!this.orderInfo.order.logisticsNo) {
        return this.$message.warning('暂无物流信息')
      }
      this.drawer = true
      this.onlineLogisticsQuery()
    },
    onlineLogisticsQuery() {
      orderApi
        .onlineLogisticsQuery({
          deliveryNo: this.orderInfo.order.logisticsNo
        })
        .then(res => {
          this.logisticsInfo = res.data
        })
    },
    // 修改地址
    updateAddress() {
      const userAddress = this.orderInfo.userAddress
      this.receiverForm = {
        orderId: this.orderInfo.order.orderId,
        province: userAddress.province,
        city: userAddress.city,
        area: userAddress.area,
        detail: userAddress.detail,
        contact: userAddress.contact,
        mobile: userAddress.mobile,
        addressList: [userAddress.province, userAddress.city, userAddress.area]
      }
      this.receiverFormVisible = true
    },
    confirmUpdateAddress() {
      orderApi
        .onlineOrderAlterAddress({
          ...this.receiverForm,
          province: this.receiverForm.addressList[0],
          city: this.receiverForm.addressList[1],
          area: this.receiverForm.addressList[2]
        })
        .then(() => {
          this.receiverFormVisible = false
          this.$notify({
            title: '成功',
            message: '地址修改成功',
            type: 'success'
          })
          this.getInfo()
        })
    },
    // 添加备注
    addRemark() {
      this.$prompt('请输入备注', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          orderApi
            .onlineOrderRemark({
              orderId: this.orderInfo.order.orderId,
              remark: value
            })
            .then(() => {
              this.$notify({
                title: '成功',
                message: '订单备注成功',
                type: 'success'
              })
              this.getInfo()
            })
        })
        .catch(() => {})
    },
    // 关闭订单
    closeOrder() {
      this.$confirm('是否确定关闭该订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          orderApi
            .onlineOrderClose({
              orderId: this.orderInfo.order.orderId
            })
            .then(() => {
              this.$notify({
                title: '成功',
                message: '订单关闭成功',
                type: 'success'
              })
              this.getInfo()
            })
        })
        .catch(() => {})
    },
    // 获取订单详情
    getInfo() {
      orderApi
        .onlineOrderQuery({
          orderId: this.$route.query.orderId
        })
        .then(res => {
          this.orderInfo = res.data.items[0]
        })
    }
  }
}
</script>

<style lang="less" scoped>
.u-title {
  padding: 20px 0;
  font-weight: 500;
  color: #333;
  font-size: 16px;
}
.u-table {
  margin-bottom: 20px;
}
</style>
