/**
 * 公告管理
 */
import { api } from './index'

export default {
  queryNotice: params => api.get('/admin/queryNotice', params),
  insertNotice: params => api.post('/admin/insertNotice', params),
  updateNotice: params => api.post('/admin/updateNotice', params),
  deleteNotice: params => api.post('/admin/deleteNotice', params)
}
