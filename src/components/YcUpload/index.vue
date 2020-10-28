<template>
  <el-upload
    v-loading="uploadLoading"
    accept="image/*"
    :action="uploadUrl"
    :show-file-list="false"
    :on-success="handleUploadSuccess"
    :before-upload="handleBeforeUpload"
  >
    <div
      v-if="!value"
      class="u-upload__placeholder"
      :style="{ width: size + 'px', height: size + 'px'}"
    >
      <i class="el-icon-upload"></i>
    </div>
    <el-image
      v-else
      class="u-upload__image"
      :style="{ width: size + 'px', height: size + 'px'}"
      :src="value | fmtWebp"
      fit="fill"
      lazy
      webp
    />
    <div v-if="tip" class="u-upload__tip">{{ tip }}</div>
  </el-upload>
</template>

<script>
export default {
  name: 'YcUpload',
  props: {
    value: String,
    tip: String,
    size: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      uploadLoading: false
    }
  },
  methods: {
    // 上传成功
    handleUploadSuccess(res, file) {
      this.uploadLoading = false
      this.$emit('input', res.data)
    },
    // 文件上传钩子
    handleBeforeUpload() {
      this.uploadLoading = false
      return true
    }
  }
}
</script>

<style lang="less" scoped>
.u-upload {
  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #eee;
    border-radius: 10px;
    box-sizing: border-box;
    .el-icon-upload {
      font-size: 32px;
      color: #ccc;
    }
  }
  &__image {
    display: block;
    border-radius: 10px;
  }
  &__tip {
    font-size: 12px;
    color: #999;
  }
}
</style>
