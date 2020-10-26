<template>
  <div class="u-setting p-2">
    <div class="bg-bai p-2">
      <h1 class="font-s-2">打印设置</h1>
      <div class="flex align-center">
        <div class="font-s-14 text-hui">小票机机型:</div>
        <el-select class="mx-1" v-model="printIndex" size="mini" placeholder="请选择">
          <el-option
            v-for="item in printList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary" size="mini" @click="doTest">打印测试</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'store'
import { getLodop, installTip } from '@/lodop/LodopFuncs'
export default {
  name: 'Print',
  data() {
    return {
      printIndex: store.get('PRINT_INDEX'),
      printList: []
    }
  },
  watch: {
    printIndex(index) {
      store.set('PRINT_INDEX', index)
      this.setPrint(index)
    }
  },
  mounted() {
    setTimeout(() => {
      this.getLodop()
      this.getPrintConfig()
    }, 1000)
  },
  methods: {
    doTest() {
      if (!this.lodop) {
        installTip()
        return
      }
      if (!this.printIndex) {
        this.$message.warning('请选择打印机')
        return
      }
      const LODOP = getLodop()
      LODOP.SET_PRINT_STYLE('FontSize', 8)
      LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', `
        <div>
          <h1  style="font-size: 16pt;text-align: center">小黄兜宠物店</h1>
          <div style="margin-bottom: 2mm;font-size: 10pt;">订单号：1000000020391</div>
          <div style="font-size: 10pt;">收银员：小黄兜宠物生活馆</div>
          <div style="padding: 2mm 0;font-size: 10pt;">= = = = = = = = = = = = = = = = = = = = = = =</div>

          <div style="display: flex">
            <div style="width: 30mm;font-size: 10pt;">商品名称</div>
            <div style="width: 21mm;text-align:center;font-size: 10pt;">数量</div>
            <div style="width: 21mm;text-align:center;font-size: 10pt;">单价</div>
          </div>

          <div style="display: flex;margin-top: 2mm;">
            <div style="width: 30mm;font-size: 10pt;">渴望猫粮15kg鳕鱼味</div>
            <div style="width: 21mm;text-align:center;font-size: 10pt;">1</div>
            <div style="width: 21mm;text-align:center;font-size: 10pt;">490.00</div>
          </div>
          <div style="display: flex;margin-top: 2mm;">
            <div style="width: 30mm;font-size: 10pt;">渴望猫粮15kg鳕鱼味</div>
            <div style="width: 21mm;text-align:center;font-size: 10pt;">1</div>
            <div style="width: 21mm;text-align:center;font-size: 10pt;">490.00</div>
          </div>
          <div style="display: flex;margin-top: 2mm;">
            <div style="width: 30mm;font-size: 10pt;">渴望猫粮15kg鳕鱼味</div>
            <div style="width: 21mm;text-align:center;font-size: 10pt;">1</div>
            <div style="width: 21mm;text-align:center;font-size: 10pt;">490.00</div>
          </div>
        </div>
      `)
      LODOP.PREVIEW()
    },
    getLodop() {
      this.lodop = getLodop()
    },
    setPrint(index) {
      this.lodop.SET_PRINTER_INDEX(index)
    },
    getPrintConfig() {
      if (this.lodop) {
        const arr = []
        const iPrinterCount = this.lodop.GET_PRINTER_COUNT()
        for (let i = 0; i < iPrinterCount; i++) {
          arr.push({
            label: this.lodop.GET_PRINTER_NAME(i),
            value: i
          })
        }
        this.printList = arr
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>

