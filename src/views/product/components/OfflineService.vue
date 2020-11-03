<template>
  <!-- 线下门店服务 -->
  <div class="bg-bai p-2">
    <h1 class="u-title mb-5">服务价目表</h1>
    <div class="u-table">
      <div class="u-table__header">
        <div class="title-1">服务类型</div>
        <div class="title-2">服务内容</div>
        <div class="title-3">价格明细</div>
      </div>
      <div class="u-table__row" v-for="item in list" :key="item.name">
        <div class="row-left">
          <img style="widht: 24px;height:24px;" class="mr-1" :src="item.icon" />
          <span>{{ item.name }}</span>
        </div>
        <div class="row-right">
          <div class="row-item" v-for="s in item.children" :key="s.id">
            <div class="content-left">{{ s.name }}</div>
            <div class="content-right">
              <el-button class="yc-edit" @click="editMeal(s)">价目表</el-button>
              <el-button class="yc-del" @click="delMeal(s)">删除</el-button>
            </div>
          </div>
          <div class="row-item u-add">
            <div class="u-add__line"></div>
            <div class="u-add__btn" @click="addMeal(item.name)">
              <i class="el-icon-circle-plus"></i>
              <span>添加</span>
            </div>
            <div class="u-add__line"></div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="880px"
      top="100px"
      :close-on-click-modal="false"
    >
      <div>
        <div class="flex align-center justify-center border-bottom-divider pb-2">
          <input class="u-mealname" v-model="editMealForm.name" placeholder="请输入名称" />
          <span class="u-mealtip">价目表</span>
        </div>
        <el-table :data="editMealForm.mealItemsList" style="width: 100%">
          <el-table-column prop="name" label="名称" align="center" width="350">
            <template slot-scope="scope">
              <el-input
                class="u-bold"
                size="small"
                v-model="scope.row.name"
                placeholder="例如小型犬、中型犬、大型犬"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="originalPrice" label="原价" align="center">
            <template slot-scope="scope">
              <div class="flex align-center justify-center p-1">
                <g-number class="u-bold" size="small" v-model="scope.row.originalPrice"></g-number>
                <span class="ml-1">元</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="memberPrice" label="会员价" align="center">
            <template slot-scope="scope">
              <div class="flex align-center justify-center p-1">
                <g-number class="u-bold" size="small" v-model="scope.row.memberPrice"></g-number>
                <span class="ml-1">元</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="action" label="操作" align="center" width="120">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                circle
                @click="delMealItems(scope.$index)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="u-add" @click="addMealItems">
          <div class="u-add__line"></div>
          <div class="u-add__btn">
            <i class="el-icon-circle-plus"></i>
            <span>添加收费区间</span>
          </div>
          <div class="u-add__line"></div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveOrUpdate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import serviceApi from '@/api/service'
import GNumber from '@/components/GNumber'
export default {
  name: 'OfflineService',
  components: {
    GNumber
  },
  data() {
    return {
      dialogVisible: false,
      editMealForm: {
        id: '',
        name: '',
        category: '',
        discountType: 0,
        mealItemsList: []
      },
      list: [
        {
          name: '洗澡',
          icon: 'http://mall.gohipet.com/img/icon-shower.6c441e90.png',
          children: []
        },
        {
          name: '美容',
          icon: 'http://mall.gohipet.com/img/icon-hairdressing.9f74ab6f.png',
          children: []
        },
        {
          name: '寄养',
          icon: 'http://mall.gohipet.com/img/icon-foster.8e6b170f.png',
          children: []
        },
        {
          name: '单项',
          icon: 'http://mall.gohipet.com/img/icon-itemService.7d09442a.png',
          children: []
        },
        {
          name: '其他',
          icon: 'http://mall.gohipet.com/img/icon-else.6e63dc20.png',
          children: []
        }
      ]
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    saveOrUpdate() {
      // 检测数据
      const form = this.editMealForm
      if (!form.name) {
        return this.$message.warning('请输入价目表名称！')
      }
      for (let i = 0; i < form.mealItemsList.length; i++) {
        const item = form.mealItemsList[i]
        if (!item.name) {
          return this.$message.warning('请输入类目名称！')
        }
        if (!item.originalPrice) {
          return this.$message.warning('请输入原价！')
        }
      }

      serviceApi
        .saveOrUpdate({
          mealInfo: {
            id: form.id,
            name: form.name,
            category: form.category,
            discountType: form.discountType
          },
          mealItemList: form.mealItemsList
        })
        .then(() => {
          this.$notify({
            title: '成功',
            message: '操作成功',
            type: 'success'
          })
          this.dialogVisible = false
          this.getList()
        })
    },
    addMeal(category) {
      this.editMealForm = {
        id: '',
        name: '',
        category,
        discountType: 0,
        mealItemsList: []
      }
      this.dialogVisible = true
    },
    editMeal(meal) {
      this.editMealForm = {
        id: meal.id,
        name: meal.name,
        category: meal.category,
        discountType: meal.discountType,
        mealItemsList: _.cloneDeep(meal.mealItemsList) || []
      }
      this.dialogVisible = true
    },
    delMeal(meal) {
      this.$confirm('确认删除改套餐？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          serviceApi
            .del({
              id: meal.id
            })
            .then(res => {
              this.getList()
              this.$notify({
                title: '成功',
                message: '操作成功',
                type: 'success'
              })
            })
        })
        .catch(() => {})
    },
    addMealItems() {
      this.editMealForm.mealItemsList.push({
        name: '',
        originalPrice: '',
        memberPrice: ''
      })
    },
    delMealItems(index) {
      this.editMealForm.mealItemsList.splice(index, 1)
    },
    getList() {
      serviceApi
        .queryTreeList({
          pageSize: 999,
          pageNo: 1
        })
        .then(res => {
          const list = _.get(res.data, 'items', [])
          this.list.forEach(v => (v.children = []))
          list.forEach(item => {
            const map = {
              洗澡: 0,
              美容: 1,
              寄养: 2,
              单项: 3,
              其他: 4
            }
            this.list[map[item.category]].children.push(item)
          })
        })
    }
  }
}
</script>

<style lang="less" scoped>
.u-title {
  font-size: 24px;
}
.u-table {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
  border-top: 1px solid #f2f2f5;
  border-left: 1px solid #f2f2f5;
  border-bottom: 1px solid #f2f2f5;
  color: #333;
  font-size: 14px;
  &__header {
    width: 100%;
    height: 60px;
    background-color: #f7f7fa;
    display: flex;
    justify-content: flex-start;
    color: #666;
    .title-1 {
      display: flex;
      align-items: center;
      padding-left: 46px;
      width: 20%;
      border-right: 1px solid #f2f2f5;
    }
    .title-2 {
      display: flex;
      align-items: center;
      padding-left: 46px;
      width: 42%;
      border-right: 1px solid #f2f2f5;
    }
    .title-3 {
      display: flex;
      align-items: center;
      padding-left: 46px;
      width: 38%;
    }
  }
  &__row {
    display: flex;
    .row-left {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      padding: 15px;
      border-top: 1px solid #f2f2f5;
      border-right: 1px solid #f2f2f5;
    }
    .row-right {
      flex: 1;
      border-right: 1px solid #f2f2f5;
    }
    .row-item {
      display: flex;
      border-top: 1px solid #f2f2f5;
    }
    .content-left {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: 52.5%;
      padding: 15px 15px 15px 46px;
      border-right: 1px solid #f2f2f5;
      color: #222;
    }
    .content-right {
      box-sizing: border-box;
      width: 47.5%;
      padding: 15px 15px 15px 46px;
    }
  }
}
.u-add {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-weight: 500;
  color: #ff7013;
  &__line {
    width: 200px;
    height: 20px;
    border-radius: 20px;
    background: #fff7e6;
  }
  &__btn {
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  i {
    font-size: 20px;
    margin-right: 10px;
  }
}
.u-mealname {
  width: 185px;
  height: 36px;
  padding: 0 18px;
  margin-right: 10px;
  border-radius: 18px;
  border: 1px solid #707070;
  outline: none;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  color: #585858;
  font-weight: bold;
  &:focus {
    border-color: #ff7013;
  }
}
.u-mealtip {
  font-size: 20px;
  font-weight: bold;
}
.u-bold {
  /deep/ .el-input__inner {
    font-weight: bold;
    color: #000;
    border-radius: 8px;
  }
}
</style>
