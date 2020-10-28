<template>
  <!-- 线上门店服务 -->
  <div class="p-2">
    <div class="u-offsv">
      <div class="u-offsv__item" v-for="item in list" :key="item.id">
        <el-image class="u-offsv__logo" :src="item.image" fit="cover" lazy webp></el-image>
        <div class="u-offsv__name">{{ item.name }}</div>
        <div class="u-offsv__price">
          <span class="font-s-12">¥</span>
          <span class="font-weight-bold">{{ item.price.toFixed(2) }}</span>
        </div>
        <div class="u-offsv__mask">
          <i class="el-icon-edit-outline" @click.stop="doUpdate(item)"></i>
          <i class="el-icon-delete" @click.stop="doDelete(item)"></i>
        </div>
      </div>

      <div class="u-offsv__item align-center justify-center" @click="doAdd">
        <i class="el-icon-plus font-weight-bold"></i>
      </div>
    </div>

    <el-dialog width="800px" :title="editText" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="120px" size="small">
        <el-form-item label="服务图片">
          <yc-upload v-model="form.image" tip="提示：建议尺寸400x400"></yc-upload>
        </el-form-item>
        <el-form-item label="服务名称">
          <el-input v-model.trim="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model.trim="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model.trim="form.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import YcUpload from '@/components/YcUpload'
import serviceApi from '@/api/service'
export default {
  name: 'OnlineService',
  components: {
    YcUpload
  },
  data() {
    return {
      dialogFormVisible: false,
      uploadLoading: false,
      list: [],
      form: {}
    }
  },
  computed: {
    editText() {
      return this.form.id ? '编辑服务' : '新增服务'
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    doAdd() {
      this.form = {}
      this.dialogFormVisible = true
    },
    doUpdate(row) {
      this.form = row
      this.dialogFormVisible = true
    },
    doDelete(row) {
      this.$confirm('此操作将删除该线上服务, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          serviceApi
            .onlineDelete({
              id: row.id
            })
            .then(res => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.load()
            })
        })
        .catch(() => {})
    },
    handleConfirm() {
      serviceApi.onlineSaveOrUpdate(this.form).then(res => {
        this.dialogFormVisible = false
        this.$notify({
          title: '提示',
          message: '添加成功',
          type: 'success'
        })
        this.load()
      })
    },
    load() {
      serviceApi
        .onlineList({
          pageNo: 1,
          pageSize: 999
        })
        .then(res => {
          this.list = res.data
        })
    }
  }
}
</script>

<style lang="less" scoped>
.u-offsv {
  display: flex;
  align-items: center;
  &__item {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 175px;
    height: 260px;
    padding: 0 10px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    &:hover {
      .u-offsv__mask {
        opacity: 1;
      }
    }
  }
  &__logo {
    width: 175px;
    height: 175px;
  }
  &__name {
    font-weight: 700;
    font-size: 14px;
    color: #4b4b4d;
    margin-top: 16px;
  }
  &__price {
    margin-top: 16px;
  }
  &__mask {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    background: rgba(0, 0, 0, 0.6);
    transition: opacity 100ms;
  }
  .el-icon-plus {
    font-size: 50px;
    color: #ccc;
  }
  .el-icon-edit-outline {
    font-size: 24px;
    color: #fff;
  }
  .el-icon-delete {
    margin-left: 10px;
    font-size: 24px;
    color: red;
  }
}
</style>
