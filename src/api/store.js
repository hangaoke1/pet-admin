import { api } from './index'

export default {
  queryStore: params => api.get('/admin/queryStore', params),
  saveOrUpdateStore: params => api.post('/admin/saveOrUpdateStore', params)
}
