<template>
  <div>
    <div class="u-header">
      <h1>收银台</h1>
      <div class="right-btn" type="danger" @click="goToHome">切换至总后台</div>
    </div>
    <app-main></app-main>
  </div>
</template>

<script>
import { AppMain } from './components'
export default {
  name: 'CashierLayout',
  components: {
    AppMain
  },
  methods: {
    goToHome() {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style lang="less" scoped>
.u-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 50px;
  background: #fff;
}
.right-btn {
  display: inline-block;
  margin-right: 20px;
  padding: 0 16px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  border-radius: 16px;
  background: #ff7013;
  cursor: pointer;
}
</style>
