<template>
  <div class="u-cash flex flex-column p-2 bg-bai">
    <!-- 头部 -->
    <div class="u-bill flex-0 flex align-center">
      <span class="u-bill__add el-icon-plus px-1" @click="addBill"></span>
      <div class="u-bill__wrap inline-flex align-center bg-bai text-hui2">
        <div
          v-for="(item, index) in bills"
          class="flex-0"
          :class="{'u-bill__active': item.id === billId}"
          :key="item.name"
          @click="billId = item.id"
        >
          <div class="u-bill__item">
            <span class="mr-1">{{ item.title }}</span>
            <span class="el-icon-close text-base" @click.stop="delBill(index, item.id)"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="flex-1 flex flex-column bg-bai p-2">
      <div class="flex-0 flex justify-between align-center">
        <span class="u-add__btn flex-0" @click="showSkuChoose">添加商品/服务/活体</span>
        <el-input
          class="u-search"
          size="mini"
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
          <el-table-column prop="name" label="商品/服务" width="180" align="center"></el-table-column>
          <!-- <el-table-column prop="originPrice" label="原价(元)" align="center"></el-table-column> -->
          <el-table-column prop="price" label="单价(元)" align="center"></el-table-column>
          <el-table-column prop="count" label="数量" width="180" align="center">
            <template slot-scope="{row}">
              <el-input-number
                v-model="row.quantity"
                controls-position="right"
                size="small"
                :min="1"
                :max="99999"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="小计(元)" align="center">
            <template slot-scope="{row}">
              <span>{{ (row.quantity * row.price).toFixed(2) }}</span>
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

    <!-- 底部 -->
    <div class="u-footer flex-0 flex align-center justify-between">
      <div>
        <el-button type="primary" plain @click="doEmpty">清空列表</el-button>
      </div>
      <div>
        <button class="u-calc" @click="doSubmit">
          <span class="mr-1">结算</span>
          <span>¥</span>
          <span class="font-s-28">{{ billTotal.toFixed(2) }}</span>
        </button>
      </div>
    </div>

    <!-- 商品/服务/活体 选择 -->
    <sku-choose ref="skuChoose" @close="isStart = true" @choose="handleAddSku"></sku-choose>
  </div>
</template>

<script>
import productApi from '@/api/product'
import SkuChoose from './components/SkuChoose'

const fmtSku = (sku, productType) => {
  // 商品
  if (productType === 0) {
    return {
      productType,
      name: sku.skuName,
      imgUrl: sku.skuImgUrl,
      quantity: 1,
      originPrice: sku.originPrice,
      price: sku.price,
      skuId: sku.id,
      id: sku.id
    }
  }
  // TODO: 针对会员进行优惠 服务商品
  if (productType === 1) {
    return {
      productType,
      name: sku.name + '-' + sku.mealName + '-' + sku.category,
      imgUrl: '',
      quantity: 1,
      originPrice: sku.originalPrice,
      price: sku.originalPrice,
      skuId: '',
      id: sku.id
    }
  }
}
export default {
  name: 'Cashier',
  components: {
    SkuChoose
  },
  data() {
    return {
      visible: false,
      isStart: true,
      loading: false,
      keyword: '',
      bills: [],
      billId: ''
    }
  },
  computed: {
    activeBill() {
      return this.bills.filter(v => v.id === this.billId)[0]
    },
    billTotal() {
      const total = this.activeBill.list.reduce((t, i) => {
        return t + i.price * i.quantity
      }, 0)
      return total
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
    doEmpty() {
      this.activeBill.list = []
    },
    // 选择sku，区分商品和服务
    handleAddSku({ serviceSelect, productSelect }) {
      productSelect = productSelect.map(v => fmtSku(v, 0))
      serviceSelect = serviceSelect.map(v => fmtSku(v, 1))
      const addList = [...serviceSelect]
      const skuList = this.activeBill.list
      productSelect.forEach(item => {
        const sameSku = skuList.filter(v => {
          return v.id === item.id && item.productType === v.productType
        })[0]
        if (sameSku) {
          sameSku.quantity += 1
        } else {
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
    doSubmit() {
      if (this.activeBill.list.length === 0) {
        return
      }
      this.$message('订单结算')
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
    delBill(index, id) {
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
  .u-bill {
    border-bottom: 1px solid #f5f5f5;
    &__add {
      cursor: pointer;
    }
    &__wrap {
      margin-bottom: -1px;
    }
    &__active {
      color: #ff7013;
      font-weight: 500;
      .u-bill__item {
        border-bottom: 1px solid transparent;
      }
    }
    &__item {
      user-select: none;
      font-size: 14px;
      display: flex;
      align-items: center;
      box-sizing: content-box;
      border-radius: 8px 8px 0 0;
      border: 1px solid #f5f5f5;
      padding: 0 20px;
      height: 40px;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      cursor: pointer;
      &:hover {
        color: #ff7013;
        border-bottom: 1px solid transparent;
      }
    }
  }
  .u-add__btn {
    display: inline-block;
    border-radius: 20px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    padding: 0 20px;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    margin-right: 16px;
    min-width: 96px;
    background: #ff7013;
  }
  .u-search {
    width: 200px;
    /deep/ .el-input__inner {
      border-radius: 15px;
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
}
</style>
