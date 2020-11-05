<template>
  <div class="u-bill flex align-center">
    <span class="u-bill__add el-icon-plus px-1" @click="addBill"></span>
    <div class="u-bill__wrap inline-flex align-center bg-bai text-hui2">
      <div
        v-for="(item, index) in list"
        class="flex-0"
        :class="{'u-bill__active': item.id === value}"
        :key="item.name"
        @click="handleClick(item.id)"
      >
        <div class="u-bill__item">
          <span class="mr-1">{{ item.title }}</span>
          <span class="el-icon-close text-base" @click.stop="delBill(index, item.id)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillMenu',
  props: {
    value: [Number, String],
    list: Array
  },
  methods: {
    handleClick(id) {
      this.$emit('input', id)
    },
    addBill() {
      this.$emit('add')
    },
    delBill(index, id) {
      this.$emit('delete', { index, id })
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>
