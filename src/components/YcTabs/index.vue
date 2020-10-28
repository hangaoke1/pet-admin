<template>
  <ul class="yc-tabs">
    <li
      v-for="item in options"
      class="yc-tabs__item"
      :class="{ active: item.value === value }"
      :key="item.value"
      @click="handleClick(item)"
    >
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    options: Array
  },
  methods: {
    handleClick(item) {
      this.$emit('input', item.value)
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="less">
.yc-tabs {
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 14px;
  margin: 0;
  padding: 0;
  &__item {
    box-sizing: content-box;
    padding: 14px 27px;
    margin: 0 5px;
    background: #e1e1e1;
    color: #39393c;
    border-radius: 8px 8px 0 0;
    transition: all 0.3s;
    cursor: pointer;
    height: 18px;
    span {
      position: relative;
      z-index: 1;
    }
    span:before {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: 0;
      width: 100%;
      left: 50%;
      height: 9px;
      border-radius: 2px;
      background-color: #ffdd03;
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
    }
    &.active > span:before {
      transform: translate(-50%) scaleX(1);
    }
    &:not(.active) > span:before {
      transform: translate(-50%) scaleX(0);
    }
    &:hover > span:before {
      transform: translate(-50%) scaleX(1);
    }
    &:hover {
      background: #fff;
      color: #333336;
    }
  }
  &__item:nth-of-type(1) {
    margin-left: 12px;
  }
  .active {
    background: #fff;
    color: #333336;
    font-weight: 700;
    font-size: 14px;
  }
}
</style>
