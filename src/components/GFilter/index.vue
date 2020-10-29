<template>
  <div class="g-filter border-bottom-divider">
    <form @submit="hanldeSubmit">
      <div class="flex justify-between">
        <div class="flex flex-wrap">
          <div style="margin-right: 5px;margin-bottom: 5px" v-for="item in options" :key="item.key">
            <template v-if="item.remote">
              <g-input-remote
                @keyup.enter.native="handleInputEnter"
                v-if="item.type === 'input'"
                :info="item"
                :form="query"
                :clearable="item.clearable"
                :suffix-icon="item.suffixIcon"
              />
              <g-select-remote
                v-if="item.type === 'select'"
                :info="item"
                :form="query"
                :clearable="item.clearable"
              />
            </template>
            <template v-else>
              <g-input
                v-if="item.type === 'input'"
                :info="item"
                :form="query"
                @keyup.enter.native="handleInputEnter"
                :suffix-icon="item.suffixIcon"
              />
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
                :start-placeholder="item.startPlaceholder"
                :end-placeholder="item.endPlaceholder"
              />
            </template>
          </div>
        </div>
        <div class="flex-0">
          <el-button class="yc-edit" size="small" native-type="submit" @click="doSearch">查询</el-button>
          <slot name="left"></slot>
        </div>
      </div>
    </form>
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
  name: 'GFilter',
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
    hanldeSubmit() {
      console.log('>>> 提交')
    },
    initQuery() {
      this.options.map(item => {
        this.$set(this.query, item.key, item.initialValue)
      })
      this.$emit('refresh', _.cloneDeep(this.query))
    },
    doSearch() {
      this.$emit('search', _.cloneDeep(this.query))
    },
    handleInputEnter() {
      this.$emit('keyup', _.cloneDeep(this.query))
    }
  }
}
</script>
