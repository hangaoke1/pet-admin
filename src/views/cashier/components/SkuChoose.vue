<template>
  <div class="u-sku-choose">
    <el-dialog
      custom-class="u-sku__dialog"
      width="880px"
      :close-on-click-modal="false"
      :visible.sync="visible"
      :show-close="false"
      @close="handleClose"
    >
      <div class="flex align-center border-bottom-divider p-2" slot="title">
        <div class="u-type" :class="{ 'u-type__active': type === 1}" @click="type = 1">服务</div>
        <div class="u-type" :class="{ 'u-type__active': type === 2}" @click="type = 2">商品</div>
      </div>
      <service-choose ref="service" v-show="type === 1" :select.sync="serviceSelect"></service-choose>
      <product-choose ref="product" v-show="type === 2" :select.sync="productSelect"></product-choose>
      <div slot="footer" class="dialog-footer">
        <span class="font-s-13">
          <span class="mr-1">
            已选服务:
            <span class="text-main">{{ serviceSelect.length }}件</span>
          </span>
          <span class="mr-1">
            已选商品:
            <span class="text-main">{{ productSelect.length }}件</span>
          </span>
        </span>
        <el-button class="yc-del" @click="visible = false">取 消</el-button>
        <el-button class="yc-btn" @click="handleConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import ServiceChoose from './Service'
import ProductChoose from './Product'
export default {
  name: 'SkuChoose',
  components: {
    ServiceChoose,
    ProductChoose
  },
  data() {
    return {
      serviceSelect: [],
      productSelect: [],
      visible: false,
      type: 1 // 1: 服务选择 2: 商品选择
    }
  },
  methods: {
    show() {
      this.visible = true
      this.serviceSelect = []
      this.productSelect = []
      this.$nextTick(() => {
        this.$refs.service.clear()
        this.$refs.product.clear()
      })
    },
    handleConfirm() {
      this.$emit(
        'choose',
        _.cloneDeep({
          serviceSelect: this.serviceSelect,
          productSelect: this.productSelect
        })
      )
      this.visible = false
    },
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
.u-type {
  position: relative;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: #999;
  margin-right: 32px;
  cursor: pointer;
  &__active {
    position: relative;
    color: #000;
    &::after {
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      width: 20px;
      height: 4px;
      border-radius: 10px;
      background: #ff7013;
    }
  }
}
</style>
<style lang="less">
.u-sku__dialog {
  .el-tree-node__content {
    height: 35px;
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 0;
  }
}
</style>
