<template>
  <ul class="yc-radio">
    <li
      class="yc-radio__item"
      :class="{ active: item.value === value }"
      v-for="item in options"
      :key="item.label"
      @click="handleClick(item)"
    >
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'YcRadio',
  props: {
    value: [String, Number, Object],
    options: Array
  },
  methods: {
    handleClick(item) {
      this.$emit('input', item.value)
      this.$emit('change', item.value)
    }
  }
}
</script>

<style lang="less" scoped>
.yc-radio {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  &__item {
    position: relative;
    font-size: 15px;
    padding: 15px 0;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      font-weight: bold;
      &::after {
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        width: 30px;
        height: 4px;
        background: #ffdd03;
        border-radius: 5px;
      }
    }
  }
  .active {
    font-weight: bold;
    &::after {
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      width: 30px;
      height: 4px;
      background: #ffdd03;
      border-radius: 5px;
    }
  }
}
</style>
