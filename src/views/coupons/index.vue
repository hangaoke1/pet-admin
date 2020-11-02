<template>
  <div class="p-2">
    <div class="p-2 bg-bai">
      <div class="u-card">
        <div class="font-s-16 mb-1">优惠券</div>
        <div class="font-s-12 mb-1">例：满300元减30元</div>
        <div class="flex justify-end">
          <div class="u-card__btn" @click="showCreate">
            <span>创建</span>
            <span class="el-icon-plus font-weight-bold font-s-1"></span>
          </div>
        </div>
      </div>
    </div>

    <el-table size="small" :data="list" style="width: 100%" empty-text="暂无优惠券" row-key="id">
      <el-table-column prop="name" label="优惠券名称" align="center">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="content" label="优惠券内容" align="center">
        <template slot-scope="scope">满{{ scope.row.required }}减{{ scope.row.value }}</template>
      </el-table-column>
      <el-table-column prop="price" label="是否有效" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.indate === 0" type="success" size="small">有效</el-tag>
          <el-tag v-else type="info" size="small">失效</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
      <el-table-column prop="price" label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button class="yc-edit" size="small">发放</el-button>
          <el-button class="yc-del" size="small" @click="showEdit(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="u-page">
      <el-pagination
        background
        :current-page="pageNo"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>

    <el-dialog :title="editText" :visible.sync="showForm">
      <el-form :model="form">
        <el-form-item label="卡券名称：" :label-width="formLabelWidth">
          <el-input size="small" v-model.trim="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="卡券内容：" :label-width="formLabelWidth">
          <div>
            <span class="mr-1">满</span>
            <el-input
              size="small"
              style="width: 100px"
              v-model.trim="form.required"
              autocomplete="off"
            ></el-input>
            <span class="mx-1">减</span>
            <el-input
              size="small"
              style="width: 100px"
              v-model.trim="form.value"
              autocomplete="off"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="是否有效：" :label-width="formLabelWidth">
          <el-switch
            v-model="form.indate"
            active-color="#13ce66"
            active-value="0"
            inactive-value="1"
          ></el-switch>
        </el-form-item>
        <el-form-item label="备注：" :label-width="formLabelWidth">
          <el-input size="small" v-model.trim="form.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showForm = false">取 消</el-button>
        <el-button type="primary" @click="confirmCreate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import couponsApi from '@/api/coupons'
export default {
  name: 'Coupons',
  data() {
    return {
      list: [],
      pageNo: 1,
      pageSize: 10,
      totalCount: 0,
      form: {},
      showForm: false,
      formLabelWidth: '100px'
    }
  },
  computed: {
    editText() {
      return this.form.id ? '编辑优惠券' : '新增优惠券'
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    showCreate() {
      this.form = {
        name: '',
        required: '',
        remark: '',
        indate: 0,
        value: ''
      }
      this.showForm = true
    },
    showEdit(row) {
      this.form = { ...row }
      this.showForm = true
    },
    confirmCreate() {
      couponsApi.saveOrUpdate({ ...this.form }).then(() => {
        this.$notify({
          title: '成功',
          message: '操作完成',
          type: 'success'
        })
        this.showForm = false
        this.getList()
      })
    },
    getList() {
      const query = {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
      couponsApi.queryList(query).then(res => {
        this.list = res.data.items
        this.totalCount = res.data.totalCount
      })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getList()
    },
    handleCurrentChange(pageNo) {
      this.pageNo = pageNo
      this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
.u-card {
  padding: 10px;
  width: 176px;
  background: rgb(252, 111, 144);
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  &__btn {
    cursor: pointer;
    font-size: 12px;
    background: #fff;
    border-radius: 14px;
    color: rgb(252, 111, 144);
    padding: 4px 10px;
  }
}
.u-page {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
