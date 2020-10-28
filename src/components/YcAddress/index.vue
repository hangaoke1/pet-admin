<template>
  <el-cascader v-model="address" :options="regionData" placeholder="请选择地址"></el-cascader>
</template>

<script>
import _ from 'lodash'
import { regionData, CodeToText, TextToCode } from 'element-china-area-data'
export default {
  props: {
    value: Array
  },
  data() {
    return {
      regionData,
      address: []
    }
  },
  watch: {
    address() {
      this.decodeAddress()
    }
  },
  created() {
    this.initAddress()
  },
  methods: {
    initAddress() {
      this.address = [
        _.get(TextToCode, `[${this.value[0]}].code`),
        _.get(TextToCode, `[${this.value[0]}][${this.value[1]}].code`),
        _.get(TextToCode, `[${this.value[0]}][${this.value[1]}][${this.value[2]}].code`)
      ]
    },
    decodeAddress() {
      const province = CodeToText[this.address[0]]
      const city = CodeToText[this.address[1]]
      const area = CodeToText[this.address[2]]
      this.$emit('input', [province, city, area])
    }
  }
}
</script>
