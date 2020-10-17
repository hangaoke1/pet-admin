import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid';

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/reset.css'

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css
import '@/styles/base.css'
import '@/styles/animate.min.css'

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.mixin({
  data() {
    return {
      uploadUrl: process.env.VUE_APP_BASE_API + '/pet/uploadFile'
    }
  },
  methods: {
    uuid() {
      return uuidv4()
    },
    url2Webp(url) {
      if (url.indexOf('imageView2/format/webp') > -1) {
        return url
      }
      return url + `?imageView2/format/webp`
    }
  }
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 扫码枪
import scanner from '@/lib/scanner'
Vue.use(scanner)

Vue.config.productionTip = false

window.gvm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
