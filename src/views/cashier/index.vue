<template>
  <div class="u-cash flex flex-column p-2 bg-bai">
    <!-- 头部 -->
    <bill-menu class="flex-0" v-model="billId" :list="bills" @add="addBill" @delete="delBill"></bill-menu>

    <!-- 内容 -->
    <div class="flex-1 flex bg-bai p-2" style="height: 0">
      <div class="flex-1 mr-2">
        <div class="flex-0 flex justify-between align-center">
          <div class="flex-0">
            <el-button class="yc-btn" style="width: 120px" @click="showSkuChoose">选购</el-button>
            <el-button class="yc-del" @click="addSpecalSku">添加差价商品</el-button>
          </div>
          <el-input
            class="yc-input"
            style="width: 200px"
            placeholder="请输入条形码"
            suffix-icon="el-icon-search"
            v-model="keyword"
            @focus="isStart = false"
            @blur="isStart = true"
            @keyup.native.enter="addSku"
          ></el-input>
        </div>
        <div class="mt-2 flex-1">
          <el-table
            v-loading="loading"
            element-loading-text="商品查询中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0)"
            ref="multipleTable"
            height="calc(100vh - 320px)"
            :data="activeBill.list"
            style="width: 100%"
          >
            <el-table-column prop="name" label="商品/服务" width="180" align="center">
              <template slot-scope="scope">
                <span
                  v-if="scope.row.productType !== 3"
                  class="font-weight-bold"
                >{{ scope.row.name }}</span>
                <el-input
                  v-else
                  class="text-center font-weight-bold"
                  size="mini"
                  v-model="scope.row.name"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="count" label="数量" align="center">
              <template slot-scope="{row}">
                <el-input-number
                  class="f-number"
                  style="width: 80px"
                  v-model.number="row.quantity"
                  controls-position="right"
                  size="mini"
                  :min="1"
                  :max="99999"
                  @change="calcChange(row, 'quantity')"
                ></el-input-number>
              </template>
            </el-table-column>
            <el-table-column prop="price" label="零售价(元)" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.price | numFixed2 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="折扣率(%)" align="center">
              <template slot-scope="{row}">
                <el-input
                  class="f-number text-center"
                  style="width: 100px"
                  size="small"
                  v-model="row.percent"
                  @change="calcChange(row, 'percent')"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="price" label="折后价(元)" align="center">
              <template slot-scope="{row}">
                <el-input
                  class="f-number text-center"
                  style="width: 100px"
                  size="small"
                  v-model="row.memberPrice"
                  @change="calcChange(row, 'memberPrice')"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="小计(元)" align="center">
              <template slot-scope="{row}">
                <el-input
                  class="f-number text-center"
                  style="width: 100px"
                  size="small"
                  v-model="row.total"
                  @change="calcChange(row, 'total')"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="{row}">
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  size="mini"
                  @click="deleteSku(row)"
                ></el-button>
              </template>
            </el-table-column>
            <div slot="empty">请添加商品</div>
          </el-table>
        </div>
      </div>
      <div class="u-vipMember flex-0 p-2" style="width: 350px;">
        <div v-if="!vipMember" class="text-center">
          <el-button class="yc-btn mt-2" @click="handleChooseUser">会员选择</el-button>
        </div>
        <div class="flex flex-column" style="height: 100%" v-else>
          <span class="u-vipMember__close el-icon-circle-close" @click="delVipMember"></span>
          <div class="u-vipInfo mb-2 flex-0">
            <div class="u-vipInfo__user flex">
              <el-avatar class="mr-1" :size="50" :src="vipMember.avatar"></el-avatar>
              <div>
                <div class="u-vipInfo__name">{{ vipMember.nickname }}</div>
                <div class="u-vipInfo__level">{{ vipMember.vipName }}</div>
              </div>
            </div>
          </div>
          <yc-tabs
            v-model="vipMemberTab"
            class="flex-0"
            :options="['会员概况', '宠物信息'].map(v=> ({ label: v, value: v}))"
          ></yc-tabs>
          <yc-block class="flex-1" style="overflow-y: auto;">
            <div v-if="vipMemberTab === '会员概况'">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="u-vipInfo__base">
                    <div class="u-vipInfo__label">会员余额</div>
                    <div class="u-vipInfo__value">{{ vipMember.balance | numFixed2 }}</div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="u-vipInfo__base">
                    <div class="u-vipInfo__label">会员等级</div>
                    <div class="u-vipInfo__value">{{ vipMember.vipName }}</div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="u-vipInfo__base">
                    <div class="u-vipInfo__label">宠物数量</div>
                    <div
                      class="u-vipInfo__value"
                    >{{ vipMember.petRecordList ? vipMember.petRecordList.length : 0 }}</div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-if="vipMemberTab === '宠物信息'">
              <pet-item v-for="pet in (vipMember.petRecordList || [])" :info="pet" :key="pet.id"></pet-item>
            </div>
          </yc-block>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="u-footer flex-0 flex align-center justify-between">
      <div>
        <el-button class="yc-del" @click="doEmpty">清空列表</el-button>
      </div>
      <div>
        <button class="u-calc f-number" @click="doSubmit">
          <span class="mr-1">结算</span>
          <span>¥</span>
          <span class="font-s-28">{{ billTotal | numFixed2 }}</span>
        </button>
      </div>
    </div>

    <!-- 用户选择 -->
    <yc-user-choose ref="userChoose" v-model="vipMember" single></yc-user-choose>

    <!-- 商品/服务/活体 选择 -->
    <sku-choose ref="skuChoose" @close="isStart = true" @choose="handleAddSku"></sku-choose>

    <!-- 订单确认 -->
    <el-dialog title="确认订单" width="950px" :close-on-click-modal="false" :visible.sync="showConfrim">
      <div class="flex">
        <div class="flex-1 u-confirm__left">
          <el-table size="mini" :data="activeBill.list" style="width: 100%" height="300">
            <el-table-column prop="name" align="center" label="商品/服务"></el-table-column>
            <el-table-column prop="quantity" align="center" label="数量">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.quantity }}</span>
              </template>
            </el-table-column>
            <el-table-column label="实付金额(元)" align="center">
              <template slot-scope="{row}">
                <span class="f-number">{{ row.total | numFixed2 }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="flex-1 u-confirm__right">
          <div class="u-confirm__vip">
            <div class="u-confirm__info">
              <div v-if="vipMember">
                <div class="u-vipInfo__user flex">
                  <el-avatar class="mr-1" :size="50" :src="vipMember.avatar"></el-avatar>
                  <div>
                    <div class="u-vipInfo__name">{{ vipMember.nickname }}</div>
                    <div class="u-vipInfo__level">{{ vipMember.vipName }}</div>
                  </div>
                </div>
                <div class="mt-2">
                  <span>卡内余额：</span>
                  <span class="f-number">{{ vipMember.balance | numFixed2 }}</span>
                </div>
              </div>
              <div v-else>散客</div>
            </div>
            <div class="u-pay mt-2">
              <div
                v-for="item in showPayList"
                class="u-pay__item"
                :class="{'u-pay__active': item.value === payType }"
                :key="item.label"
                @click="payType = item.value"
              >
                <el-avatar :src="item.icon"></el-avatar>
                <div class="mt-1 font-weight-bold">{{ item.label }}</div>
              </div>
            </div>
            <div class="mt-2 flex align-center justify-between">
              <div class="flex align-center mr-1">
                <span class="font-s-11">销售时间：</span>
                <el-date-picker
                  style="width: 190px"
                  size="mini"
                  v-model="saleTime"
                  type="datetime"
                  placeholder="选择日期时间"
                ></el-date-picker>
              </div>
              <div class="flex align-center">
                <el-checkbox size="mini" v-model="needPrint">打印小票</el-checkbox>
                <el-input-number
                  class="ml-1 f-number"
                  v-model="printCount"
                  controls-position="right"
                  style="width: 60px"
                  size="mini"
                  :min="1"
                  :max="10"
                ></el-input-number>
              </div>
            </div>
          </div>
          <div class="u-confirm__pay"></div>
        </div>
      </div>
      <span slot="footer" class="flex align-center justify-end">
        <span class="mr-2 f-number">
          <span class="font-s-12 text-red mr-1">已优惠：¥ {{ billDiscount | numFixed2 }}</span>
          <span class="font-s-14 text-hui2">实付金额：</span>
          <span class="font-s-14">¥</span>
          <span class="font-s-2 font-weight-bold">{{ billTotal | numFixed2 }}</span>
        </span>
        <el-button size="small" type="primary" @click="doConfirm">确认结算</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import store from 'store'
import { printCasherOrder } from '@/lodop/print'
import productApi from '@/api/product'
import storeApi from '@/api/store'
import YcUserChoose from '@/components/YcUserChoose'
import YcTabs from '@/components/YcTabs'
import YcBlock from '@/components/YcBlock'

import PetItem from './components/PetItem.vue'

import SkuChoose from './components/SkuChoose'
import BillMenu from './components/BillMenu'
import { fmtSku } from './utils'

export default {
  name: 'Cashier',
  components: {
    SkuChoose,
    YcUserChoose,
    BillMenu,
    YcTabs,
    YcBlock,
    PetItem
  },
  data() {
    return {
      printCount: 1,
      needPrint: true,
      showConfrim: false,
      visible: false,
      isStart: true,
      loading: false,
      keyword: '',
      bills: [], // 所有账单
      billId: '', // 当前账单
      vipMember: store.get('VIP_MEMBER'),
      vipMemberTab: '会员概况',
      saleTime: '',
      // payType  0 微信，1 支付宝，2 现金，3 余额
      payType: '',
      payList: [
        {
          label: '微信',
          value: 0,
          icon: require('../../assets/wechatpay.png')
        },
        {
          label: '支付宝',
          value: 1,
          icon: require('../../assets/alipay.png')
        },
        {
          label: '现金',
          value: 2,
          icon: require('../../assets/cashpay.png')
        },
        {
          label: '余额',
          value: 3,
          icon: require('../../assets/balancepay.png')
        }
      ]
    }
  },
  computed: {
    ...mapState({
      storeInfo: state => state.store.store
    }),
    activeBill() {
      return this.bills.filter(v => v.id === this.billId)[0]
    },
    billTotal() {
      const total = this.activeBill.list.reduce((t, i) => {
        return t + Number(i.total)
      }, 0)
      return total
    },
    billDiscount() {
      const totalFee = this.activeBill.list.reduce((t, i) => {
        return (t += i.quantity * i.price)
      }, 0)
      return totalFee - this.billTotal
    },
    showPayList() {
      if (this.vipMember) {
        return this.payList
      } else {
        return this.payList.filter(v => v.value !== 3)
      }
    }
  },
  watch: {
    vipMember(val) {
      if (val) {
        store.set('VIP_MEMBER', val)
      } else {
        store.remove('VIP_MEMBER')
      }
    },
    needPrint(val) {
      if (val) {
        // getLodop()
      }
    }
  },
  created() {
    // TODO: 持久化
    this.addBill()
    this._scanner = this.$scanner({
      callback: v => {
        if (this.isStart && v) {
          this.keyword = v
          this.addSku()
        }
      }
    })
  },
  beforeDestroy() {
    this._scanner.cancel()
  },
  methods: {
    // 添加差价商品
    addSpecalSku() {
      const uuid = this.uuid()
      this.activeBill.list.push({
        productType: 3,
        id: uuid,
        skuId: uuid,
        name: '差价商品',
        imgUrl: '',
        price: 1,
        memberPrice: 1,
        quantity: 1,
        percent: 100,
        total: 1
      })
    },
    delVipMember() {
      this.vipMember = null
    },
    calcChange(row, type) {
      // 数量 零售价 折扣率 折后价格 小记 相互联动算法
      if (type === 'quantity') {
        row.total = (row.memberPrice * row.quantity).toFixed(2)
      }
      if (type === 'price') {
        row.percent = ((row.memberPrice / row.price) * 100).toFixed(2)
      }
      if (type === 'percent') {
        row.memberPrice = (row.price * (row.percent / 100)).toFixed(2)
        row.total = (row.memberPrice * row.quantity).toFixed(2)
      }
      if (type === 'memberPrice') {
        row.percent = ((row.memberPrice / row.price) * 100).toFixed(2)
        row.total = (row.memberPrice * row.quantity).toFixed(2)
      }
      if (type === 'total') {
        row.memberPrice = (row.total / row.quantity).toFixed(2)
        row.percent = ((row.memberPrice / row.price) * 100).toFixed(2)
      }
      row.quantity = +row.quantity
      row.price = +row.price
      row.percent = +row.percent
      row.memberPrice = +row.memberPrice
      row.total = +row.total
    },
    handleChooseUser() {
      this.$refs.userChoose.show()
    },
    doEmpty() {
      this.activeBill.list = []
    },
    // 选择sku，区分商品和服务
    handleAddSku({ serviceSelect, productSelect }) {
      productSelect = productSelect.map(v => fmtSku(v, 0))
      serviceSelect = serviceSelect.map(v => fmtSku(v, 1))
      const addList = [...serviceSelect]
      const skuList = this.activeBill.list

      // 商品单独处理
      productSelect.forEach(item => {
        const sameSku = skuList.filter(v => {
          return v.id === item.id && item.productType === v.productType
        })[0]
        if (sameSku) {
          // 相同sku只增加数量
          sameSku.quantity += 1
        } else {
          // 不相同sdu进行添加
          addList.push(item)
        }
      })
      this.activeBill.list = [...skuList, ...addList]
    },
    showSkuChoose() {
      this.$refs.skuChoose.show()
      this.isStart = false
    },
    recoverData() {},
    saveData() {},
    // 结算
    doSubmit() {
      if (this.activeBill.list.length === 0) {
        this.$message.warning('请先添加商品')
        return
      }
      this.payType = ''
      this.saleTime = Date.now()
      this.showConfrim = true
    },
    // 下单
    doConfirm() {
      if (this.payType === '') {
        return this.$message.warning('请先选择付款方式')
      }
      const totalFee = this.activeBill.list.reduce((t, i) => {
        return (t += i.quantity * i.price)
      }, 0)
      const paidFee = this.billTotal
      const skuCount = this.activeBill.list.reduce((t, i) => {
        return (t += i.quantity)
      }, 0)
      const params = {
        uid: this.vipMember ? this.vipMember.uid : '',
        remark: '',
        payType: this.payType,
        storeId: this.storeInfo.id,
        totalFee,
        discountFee: totalFee - paidFee,
        paidFee,
        skuCount,
        skuJsonString: this.activeBill.list
      }
      storeApi.insertOrder(params).then(res => {
        this.$notify({
          title: '成功',
          message: '下单完成',
          type: 'success'
        })
        this.showConfrim = false
        this.activeBill.list = []
        // 打印小票
        if (this.needPrint) {
          const orderInfo = { ...params, orderId: res.data }
          printCasherOrder({ storeInfo: this.storeInfo, orderInfo, count: this.printCount })
        }
      })
    },
    toggleSelection(rows) {
      rows.forEach(row => {
        this.$refs.multipleTable.toggleRowSelection(row, true)
      })
    },
    handleSelectionChange(val) {
      this.activeBill.selected = val
    },
    // 添加账单
    addBill() {
      const bill = {
        id: this.uuid(),
        title: '账单',
        list: [],
        selected: []
      }
      this.bills.push(bill)
      this.billId = bill.id
    },
    delBill({ index, id }) {
      if (this.bills.length === 1) {
        return
      }

      if (this.billId === id) {
        let newBillId
        if (index > 0) {
          newBillId = this.bills[index - 1].id
        } else {
          newBillId = this.bills[index + 1].id
        }
        this.billId = newBillId
      }
      this.bills.splice(index, 1)
    },
    // 删除商品 或者 服务
    deleteSku(row) {
      // 删除列表
      this.activeBill.list = this.activeBill.list.filter(sku => {
        if (sku.productType === row.productType) {
          return sku.id !== row.id
        } else {
          return true
        }
      })
    },
    // 添加商品
    addSku() {
      this.loading = true
      productApi
        .querySkuByCode({
          code: this.keyword
        })
        .then(res => {
          if (res.data) {
            const skuList = this.activeBill.list
            let sku = res.data
            sku = fmtSku(sku, 0)
            const sameSku = skuList.filter(v => {
              return v.id === sku.id && sku.productType === v.productType
            })[0]
            if (sameSku) {
              // 存在相同商品
              sameSku.quantity += 1
              this.calcChange(sameSku, 'quantity')
            } else {
              this.activeBill.list.push(sku)
            }
            this.keyword = ''
          } else {
            this.$message.warning('未查询到商品')
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
.u-cash {
  height: calc(100vh - 50px);
  background: #fff;
  color: #333;
  .u-vipMember {
    background: #fafafa;
    border-radius: 12px;
    position: relative;
    &__close {
      position: absolute;
      font-size: 24px;
      right: 15px;
      top: 15px;
      font-weight: bold;
      cursor: pointer;
      color: #999;
    }
    /deep/ .yc-tabs {
      justify-content: center;
    }
    /deep/ .yc-tabs__item {
      padding: 10px 20px;
    }
  }
  .u-vipInfo {
    &__name {
      color: #333;
      font-weight: 800;
      font-size: 16px;
      line-height: 16px;
      margin-top: 4px;
      margin-bottom: 6px;
    }
    &__level {
      background: #eec983;
      line-height: 1;
      padding: 3px 6px;
      text-align: center;
      color: #4b4b4d;
      font-weight: 600;
      font-size: 10px;
      border-radius: 6px;
      margin-right: 4px;
    }
    &__base {
      text-align: center;
    }
    &__label {
      margin-bottom: 10px;
      font-size: 12px;
    }
    &__value {
      font-size: 16px;
      font-weight: bold;
      font-family: NumberFont;
    }
  }
  .u-pay {
    display: flex;
    justify-content: space-between;
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      height: 100px;
      width: 90px;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #ecebed;
      color: #333;
      /deep/ img {
        background: #fff;
      }
    }
    &__active {
      box-shadow: 0 0 5px rgba(255, 221, 3, 0.5);
      border-color: #ffdd03;
    }
  }
  .u-footer {
    height: 100px;
    .u-calc {
      position: relative;
      width: 390px;
      height: 56px;
      background: #ff7013;
      border-radius: 30px;
      color: #fff;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      vertical-align: baseline;
    }
  }
  .u-confirm {
    &__left {
      width: 440px;
      margin-right: 20px;
    }
    &__right {
      width: 440px;
    }
    &__vip {
      padding: 20px;
      border-radius: 15px;
      background: #fafafa;
    }
  }
}
</style>
