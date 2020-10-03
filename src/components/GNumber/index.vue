<template>
  <el-input :value="value" @input="handleInput" @blur="handleBlur" :placeholder="placeholder"></el-input>
</template>

<script>
export default {
  name: 'GNumber',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
  methods: {
    handleBlur(v) {
      const value = v.target.value
      /* eslint-disable eqeqeq */
      if (value == 0 || value == '') {
        this.$emit('input', '')
      } else {
        this.$emit('input', Number(value))
      }
    },
    handleInput(v) {
      v = this.filterNumber(v)
      // TODO: hack解决type为number时，输入.显示问题
      if (this.isInteger && event.data === '.') {
        v = v + '1'
        event.target.value = v
        event.target.value = v = v.substr(0, v.length - 1)
      } else {
        if (v.length > this.maxLength) {
          event.target.value = v.substr(0, this.maxLength)
          return
        }
        event.target.value = v
      }
      this.$emit('input', v)
    },
    filterNumber(v) {
      const len = v.length
      const s1 = v.substring(0, 1)
      const s2 = v.substring(1, 2)
      // 过滤非数字和.
      v = v.replace(/[^\d.]+/g, '')
      // 如果第一位是0，第二位不是. ，删除0
      if (len > 1 && s1 === '0' && s2 !== '.') {
        v = v.substring(1)
      }
      // 如果第一位是.
      if (s1 === '.') {
        v = ''
      }
      // 过滤第二个点
      const pos1 = v.indexOf('.')
      if (pos1 !== -1) {
        const subv = v.substring(pos1 + 1)
        const pos2 = subv.indexOf('.')
        if (pos2 !== -1) {
          v = v.substring(0, pos1 + pos2 + 1) + v.substring(pos1 + pos2 + 2)
        }
      }
      return v
    }
  }
}
</script>
