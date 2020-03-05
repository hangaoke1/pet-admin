<template>
  <div class="u-product">
    <!-- 查询条件 -->
    <div class="filter-container">
      <el-input
        v-model="listQuery.keyword"
        placeholder="请输入关键字"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="getList"
      />
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="getList"
      >查询</el-button>
      <el-button v-waves class="filter-item" type="success">创建新商品</el-button>
      <el-button v-waves class="filter-item" type="danger">批量删除商品</el-button>
      <!-- <el-button
        class="filter-item"
        type="text"
        size="mini"
        style="margin-top: 10px;"
        @click="filterMore = !filterMore"
      >展开更多筛选条件</el-button>
      <div v-show="filterMore" class="filter-more"></div>-->
    </div>

    <!-- 数据表格 -->
    <el-table
      v-loading="loading"
      :data="list"
      border
      highlight-current-row
      style="width: 100%"
      header-row-class-name="u-tabel__header"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            header-row-class-name="u-tabel__header"
            highlight-current-row
            :data="props.row.productSkuList"
          >
            <el-table-column prop="id" label="sku编号" width="100" align="center"></el-table-column>
            <el-table-column label="sku图片" width="100" align="center">
              <template slot-scope="{row}">
                <el-image
                  class="u-sku__img"
                  style="width: 50px; height: 50px"
                  :src="row.skuImgUrl"
                  fit="fill"
                  lazy
                  webp
                  :preview-src-list="[row.skuImgUrl]"
                />
              </template>
            </el-table-column>
            <el-table-column prop="skuName" label="sku名称" width="180"></el-table-column>
            <el-table-column prop="price" label="价格" width="100" align="center"></el-table-column>
            <el-table-column prop="stock" label="库存" width="100" align="center"></el-table-column>
            <el-table-column label="详情图片" width="100" align="center">
              <template slot-scope="{row}">
                <el-image
                  v-if="row.skuDetailImgUrl"
                  class="u-sku__img"
                  style="width: 50px; height: 50px"
                  :src="row.skuDetailImgUrl"
                  fit="fill"
                  lazy
                  webp
                  :preview-src-list="[row.skuDetailImgUrl]"
                />
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
      <el-table-column label="商品信息" width="200">
        <template slot-scope="{row}">
          <div class="u-product__info">
            <el-image
              v-if="row.productBannerImgList.length"
              class="u-product__img"
              style="width: 50px; height: 50px"
              :src="row.productBannerImgList[0].imgUrl"
              fit="fill"
              lazy
              webp
              :preview-src-list="row.productBannerImgList.map(item => item.imgUrl)"
            />
            <el-image
              v-else
              class="u-product__img"
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
      <el-table-column label="sku数量" width="80" align="center">
        <template slot-scope="{row}">
          <span>{{ row.productSkuList.length }}</span>
        </template>
      </el-table-column>
      <el-table-column label="当前价" width="120" align="center">
        <template slot-scope="{row}">
          <span>{{ getPrice(row.productSkuList) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="库存(总)" width="150" align="center">
        <template slot-scope="{row}">
          <span>{{ row.productSkuList.reduce((sum, item) => sum += item.stock, 0) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="适用对象" width="150" align="center">
        <template slot-scope="{row}">
          <el-tag v-if="row.product.petType === 1" size="medium">狗</el-tag>
          <el-tag v-else size="medium" type="danger">猫</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="商品分类" width="150" align="center">
        <template slot-scope="{row}">
          <span>{{ row.productCategory.categoryName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产地" width="150" align="center">
        <template slot-scope="{row}">
          <span>{{ row.product.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="200" align="center">
        <template slot-scope="{row}">
          <span>{{ row.product.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250" fixed="right" align="center">
        <template slot-scope="{row}">
          <el-button :id="row.product.createTime" size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 底部分页 -->
    <div class="u-page">
      <el-pagination
        background
        :current-page="pageNo"
        :page-sizes="[20, 50, 100, 200]"
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
import config from '@/config'
import waves from '@/directive/waves'
import * as productApi from '@/api/product'

export default {
  directives: { waves },
  data() {
    return {
      config,
      filterMore: false,
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
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    getPrice(list) {
      const priceList = list.map(item => item.price)
      const max = _.max(priceList) || 0
      const min = _.min(priceList) || 0
      if (max === min) {
        return max
      } else {
        return `${min} - ${max}`
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
          this.loading = false
          this.list = res.items
          this.totalCount = res.totalCount
          console.log('>>> 获取商品列表', res)
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
.u-product {
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
}
</style>

<style lang="less">
.u-product {
  .el-table__expanded-cell {
    background: #fafafa !important;
  }
}
</style>
