<template>
  <div class="u-productList">
    <!-- 查询条件 -->
    <div class="pb-1 border-bottom-divider flex justify-between">
      <el-input
        v-model="listQuery.keyword"
        placeholder="请输入关键字"
        style="width: 200px;"
        class="filter-item"
        suffix-icon="el-icon-search"
        size="small"
        @keyup.enter.native="getList"
      />
      <div>
        <el-button
          class="filter-item ml-1 yc-edit"
          icon="el-icon-search"
          size="small"
          @click="doSearch"
        >查询</el-button>
        <el-button class="filter-item yc-del" size="small" @click="doAdd">创建新商品</el-button>
      </div>
    </div>

    <!-- 数据表格 -->
    <el-table
      class="mt-1"
      v-loading="loading"
      :data="list"
      highlight-current-row
      style="width: 100%"
      size="small"
      header-row-class-name="u-tabel__header"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            header-row-class-name="u-tabel__header"
            highlight-current-row
            size="mini"
            :data="props.row.productSkuList"
          >
            <el-table-column prop="skuCode" label="sku条形码" width="150" align="center"></el-table-column>
            <el-table-column label="sku图片" width="100" align="center">
              <template slot-scope="{row}">
                <el-image
                  class="u-sku__img"
                  style="width: 50px; height: 50px"
                  :src="row.skuImgUrl | fmtWebp"
                  fit="fill"
                  lazy
                  webp
                  :preview-src-list="[row.skuImgUrl]"
                />
              </template>
            </el-table-column>
            <el-table-column prop="skuName" label="sku名称" width="200" align="center"></el-table-column>
            <el-table-column prop="price" label="价格" width="100" align="center"></el-table-column>
            <el-table-column label="库存" width="200" align="center">
              <template slot-scope="{row}">
                <div v-if="row.edit" class="u-stock__action">
                  <el-input v-model="row.stock" size="small" />
                  <el-button
                    class="u-stock__cancel"
                    size="mini"
                    icon="el-icon-refresh"
                    type="warning"
                    @click="cancelSkuStock(row)"
                  >取消</el-button>
                </div>
                <span v-else>{{ row.originalStock }}</span>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="商品编号" width="100" align="center">
        <template slot-scope="{row}">
          <span>{{ row.product.productId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品品牌" width="150" align="center">
        <template slot-scope="{row}">
          <span>{{ row.product.brand }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品信息" width="250">
        <template slot-scope="{row}">
          <div class="u-product__info flex">
            <el-image
              v-if="row.productBannerImgList.length"
              class="u-product__img flex-0 mr-1"
              style="width: 50px; height: 50px"
              :src="row.productBannerImgList[0].imgUrl | fmtWebp"
              fit="fill"
              lazy
              webp
              :preview-src-list="row.productBannerImgList.map(item => item.imgUrl)"
            />
            <el-image
              v-else
              class="u-product__img flex-0 mr-1"
              style="width: 50px; height: 50px"
              :src="config.petAvatar"
              fit="fill"
              lazy
              webp
            />
            <span>{{ row.product.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="80" align="center">
        <template slot-scope="{row}">
          <el-tag v-if="row.product.onOff === 0" size="medium" type="success">在售</el-tag>
          <el-tag v-else size="medium" type="danger">停售</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="sku数量" width="80" align="center">
        <template slot-scope="{row}">
          <span class="f-number">{{ row.productSkuList.length }}</span>
        </template>
      </el-table-column>
      <el-table-column label="售价(元)" width="120" align="center">
        <template slot-scope="{row}">
          <span class="f-number">{{ getPrice(row.productSkuList) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="库存(总)" width="80" align="center">
        <template slot-scope="{row}">
          <span class="f-number">{{ row.productSkuList.reduce((sum, item) => sum += item.originalStock, 0) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品分类" width="80" align="center">
        <template slot-scope="{row}">
          <span>{{ row.productCategory.categoryName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="适用对象" width="80" align="center">
        <template slot-scope="{row}">
          <el-tag v-if="row.product.petType === 1" size="medium">狗</el-tag>
          <el-tag v-else size="medium" type="danger">猫</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="产地" width="150" align="center">
        <template slot-scope="{row}">
          <span>{{ row.product.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{ row.product.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250" fixed="right" align="center">
        <template slot-scope="{row}">
          <el-button class="yc-edit" size="mini" @click="doEdit(row)">编辑</el-button>
          <el-button class="yc-del" size="mini" @click="doDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 底部分页 -->
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
  </div>
</template>

<script>
import _ from 'lodash'
import store from 'store'
import config from '@/config'
import productApi from '@/api/product'

export default {
  name: 'ProductList',
  data() {
    return {
      current: '商品管理',
      config,
      listQuery: {
        keyword: ''
      },
      pageNo: 1,
      pageSize: 10,
      totalCount: 0,
      loading: false,
      list: []
    }
  },
  beforeMount() {
    this.getList()
  },
  activated() {
    this.getList()
  },
  methods: {
    doSearch() {
      this.pageNo = 1
      this.getList()
    },
    doAdd() {
      store.set('product_edit', '')
      this.$router.push({
        path: '/product/create'
      })
    },
    doEdit(info) {
      this.$router.push({
        path: `/product/edit/${info.product.productId}`
      })
    },
    doDelete(item) {
      this.$confirm(`此操作将删除商品【${item.product.name}】, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          productApi
            .deleteProduct({
              productId: item.product.productId
            })
            .then(() => {
              this.$message.success('删除成功')
              this.getList()
            })
            .catch(err => {
              this.$message.error(err.message)
            })
        })
        .catch(() => {})
    },
    editSkuStock(sku) {
      sku.edit = true
    },
    cancelSkuStock(sku) {
      sku.edit = false
      sku.stock = sku.originalStock
    },
    saveSkuStock(sku) {
      sku.edit = false
      sku.originalStock = Number(sku.stock)
    },
    getPrice(list) {
      const priceList = list.map(item => item.price)
      const max = _.max(priceList) || 0
      const min = _.min(priceList) || 0
      if (max === min) {
        return max.toFixed(2)
      } else {
        return `${min.toFixed(2)} 至 ${max.toFixed(2)}`
      }
    },

    getList() {
      this.loading = true
      productApi
        .queryProducts({
          keyword: this.listQuery.keyword,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        })
        .then(res => {
          res = res.data
          this.loading = false
          res.items.forEach(pd => {
            pd.productSkuList.forEach(sku => {
              sku.edit = false
              sku.originalStock = sku.stock
            })
          })
          this.list = res.items
          this.totalCount = res.totalCount
        })
        .catch(err => {
          this.loading = false
          this.$message.error(err.message)
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
.u-productList {
  color: #333;
  .u-page {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }
  &__info {
    display: flex;
  }
  &__img {
    margin-right: 5px;
  }
  .u-stock {
    &__action {
      display: flex;
      align-items: center;
    }
    &__cancel {
      margin-left: 5px;
    }
  }
}
</style>

<style lang="less">
.u-productList {
  .el-table__expanded-cell {
    background: #fafafa !important;
  }
}
</style>
