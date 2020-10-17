<template>
  <div class="u-sku-choose">
    <el-dialog
      custom-class="u-sku__dialog"
      :visible.sync="visible"
      width="880px"
      :show-close="false"
    >
      <div class="flex align-center border-bottom-divider p-2" slot="title">
        <div class="font-s-18 text-hui font-weight-bold mr-3">服务</div>
        <div class="font-s-18 text-hui font-weight-bold mr-3">商品</div>
        <div class="font-s-18 text-hui font-weight-bold mr-3">活体</div>
      </div>
      <div class="flex border-bottom-divider">
        <div class="u-sku__menu flex-0">
          <el-tree :data="data" :props="defaultProps"></el-tree>
        </div>
        <div class="u-sku__list p-1 flex-1">
          <div class="flex align-center justify-between py-1">
            <div>所属分类：全部商品</div>
            <el-input style="width: 150px" size="mini" placeholder="搜索商品"></el-input>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SkuChoose',
  data() {
    return {
      visible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      data: [
        {
          label: '全部服务',
          children: []
        },
        {
          label: '洗澡',
          children: [
            { label: '长毛犬' },
            { label: '短毛犬' },
            { label: '长毛猫' },
            { label: '短毛猫' }
          ]
        },
        {
          label: '美容',
          children: [
            { label: '犬精修' },
            { label: '犬清爽剃毛' },
            { label: '猫美容' },
            { label: '猫清爽剃毛' }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    show() {
      this.visible = true
    }
  }
}
</script>

<style lang="less" scoped>
.u-sku__menu {
  width: 140px;
  height: 470px;
  overflow-y: auto;
  border-right: 1px solid #f7f7fa;
}
</style>
<style lang="less">
.u-sku__dialog {
  .el-tree-node__content {
    height: 35px;
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 0;
  }
}
</style>
