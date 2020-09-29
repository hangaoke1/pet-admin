<template>
  <div class="g-filter">
    <el-form ref="form" :model="query" label-width="auto">
      <el-row :gutter="20">
        <el-col v-for="item in options" :key="item.key" :xs="12" :sm="8" :md="8">
          <template v-if="item.remote">
            <g-input-remote
              v-if="item.type === 'input'"
              :info="item"
              :form="query"
              :clearable="item.clearable"
            />
            <g-select-remote
              v-if="item.type === 'select'"
              :info="item"
              :form="query"
              :clearable="item.clearable"
            />
          </template>
          <template v-else>
            <g-input v-if="item.type === 'input'" :info="item" :form="query" />
            <g-select
              v-if="item.type === 'select'"
              :info="item"
              :form="query"
              :clearable="item.clearable"
            />
            <g-date
              v-if="item.type === 'date'"
              :info="item"
              :form="query"
              :clearable="item.clearable"
            />
            <g-date-range
              v-if="item.type === 'dateRange'"
              :info="item"
              :form="query"
              :clearable="item.clearable"
            />
          </template>
        </el-col>
      </el-row>
    </el-form>
    <el-row>
      <el-col :span="24" class="text-right">
        <el-button>重置</el-button>
        <el-button type="primary" @click="doSearch">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
import GInput from './GInput'
import GInputRemote from './GInputRemote'
import GSelect from './GSelect'
import GSelectRemote from './GSelectRemote'
import GDate from './GDate'
import GDateRange from './GDateRange'
export default {
  components: {
    GInput,
    GInputRemote,
    GSelect,
    GSelectRemote,
    GDate,
    GDateRange
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      query: {}
    }
  },
  created() {
    this.initQuery()
  },
  methods: {
    initQuery() {
      this.options.map(item => {
        this.$set(this.query, item.key, item.initialValue)
      })
      this.$emit('refresh', _.cloneDeep(this.query))
    },
    doSearch() {
      this.$emit('search', _.cloneDeep(this.query))
    }
  }
}
</script>

<style>
</style>
