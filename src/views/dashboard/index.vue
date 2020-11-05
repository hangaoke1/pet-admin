<template>
  <div class="p-2">
    <el-row :gutter="20" class="mb-2">
      <el-col :span="8">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-shopping">
            <svg-icon icon-class="shopping" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">商城订单</div>
            <count-to
              :start-val="0"
              :end-val="32"
              :duration="1500"
              class="card-panel-num f-number"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="peoples" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">门店订单</div>
            <count-to
              :start-val="0"
              :end-val="12"
              :duration="1500"
              class="card-panel-num f-number"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="peoples" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">服务预约</div>
            <count-to :start-val="0" :end-val="5" :duration="1500" class="card-panel-num f-number" />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="peoples" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">寄养申请</div>
            <count-to
              :start-val="0"
              :end-val="32"
              :duration="1500"
              class="card-panel-num f-number"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <svg-icon icon-class="money" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">营业额</div>
            <count-to
              :start-val="0"
              :end-val="12"
              :duration="1500"
              class="card-panel-num f-number"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  name: 'Dashboard',
  components: {
    CountTo
  },
  data() {
    return {
      current: '商品管理'
    }
  }
}
</script>
<style lang="less" scoped>
.card-panel {
  height: 108px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  &:hover {
    .card-panel-icon-wrapper {
      color: #fff;
    }
    .icon-people {
      background: #40c9c6;
    }
    .icon-message {
      background: #36a3f7;
    }
    .icon-money {
      background: #f4516c;
    }
    .icon-shopping {
      background: #34bfa3;
    }
  }
  .icon-people {
    color: #40c9c6;
  }
  .icon-message {
    color: #36a3f7;
  }
  .icon-money {
    color: #f4516c;
  }
  .icon-shopping {
    color: #34bfa3;
  }
  .card-panel-icon-wrapper {
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }
  .card-panel-icon {
    float: left;
    font-size: 48px;
  }
  .card-panel-description {
    float: right;
    font-weight: bold;
    margin: 26px;
    margin-left: 0px;
    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }
    .card-panel-num {
      font-size: 20px;
    }
  }
}
@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }
  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;
    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
