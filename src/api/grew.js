/**
 * 轮播图管理
 */
import { api } from './index'

export default {
  queryList: params => api.post('/admin/grew/queryList', params),
  del: params => api.post('/admin/grew/del', params),
  saveOrUpdate: params => api.post('/admin/grew/saveOrUpdate', params)
}
