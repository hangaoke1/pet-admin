/**
 * 用户管理
 */
import { api } from './index'

export default {
  login: params => api.post('/admin/login', params),
  getInfo: params => api.get('/admin/userInfo', params),
  queryUserList: params => api.post('/admin/user/queryList', params)
}
