import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 公共参数
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // token过期
      if (res.code === 999 && window.gvm.$route.path !== '/login') {
        MessageBox.confirm('登录状态已经过期', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  function(error) {
    console.log('接口异常' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export const get = function(url, data = {}, config = {}) {
  return instance.get(url, {
    params: data,
    ...config
  })
}

export const post = function(url, data = {}, config = {}) {
  return instance.post(url, data, config)
}

export const api = {
  get,
  post
}

export default instance
