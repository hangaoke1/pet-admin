<template>
  <div class="u-cameraChoose">
    <div class="u-cameraChoose__list">
      <div
        class="u-cameraChoose__item box-shadow"
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        <img class="u-cameraChoose__icon mr-2" src="@/assets/camera.jpg" />
        <div class="flex-1 mr-2">
          <div class="u-cameraChoose__name mb-1">{{ item.cameraName }}</div>
          <div class="u-cameraChoose__no mb-1">{{ item.cameraNo }}</div>
          <div class="u-cameraChoose__url f-ellipsis">{{ item.url }}</div>
        </div>
        <el-button class="flex-0 yc-btn" size="mini" @click.stop="preview(item)">预览</el-button>
        <span v-if="item.id === value" class="yc-icon yc-icon-xuanze" style="color: #52c41a"></span>
      </div>
    </div>
  </div>
</template>

<script>
import deviceApi from '@/api/device'
export default {
  props: {
    value: [String, Number]
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getAllCamera()
  },
  methods: {
    preview(row) {
      if (row.url.indexOf('hls01open.ys7.com') === -1) {
        this.$message.error('请填写正确的设备地址（m3u8）')
      } else {
        const id = row.url.slice(34, 66)
        window.open(`https://open.ys7.com/view/h5/${id}`)
      }
    },
    handleClick(item) {
      this.$emit('input', item.id)
    },
    getAllCamera() {
      deviceApi
        .queryCameraList({
          pageNo: 1,
          pageSize: 999
        })
        .then(res => {
          this.list = res.data.items
        })
    }
  }
}
</script>

<style lang="less" scoped>
.u-cameraChoose {
  &__list {
    padding: 10px;
    max-height: 600px;
    overflow: auto;
  }
  &__item {
    position: relative;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
  }
  &__icon {
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
  }
  &__name {
    font-size: 14px;
    font-weight: bold;
  }
  &__no {
    font-size: 12px;
  }
  &__url {
    font-size: 12px;
  }
  .yc-icon-xuanze {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 30px;
  }
}
</style>
