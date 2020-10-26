<template>
  <div>
    <div class="u-header">
      <div class="font-weight-bold">{{ storeInfo.storeName }} - 收银台</div>
      <navbar :show-hide-icon="false">
        <div class="right-btn" type="danger" @click="goToHome">切换至总后台</div>
      </navbar>
    </div>
    <app-main></app-main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { AppMain, Navbar } from './components'
export default {
  name: 'CashierLayout',
  components: {
    AppMain,
    Navbar
  },
  computed: {
    ...mapState({
      storeInfo: state => state.store.store
    })
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
  padding-left: 20px;
  height: 50px;
  background: #fff;
}
.right-btn {
  font-weight: bold;
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
