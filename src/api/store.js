import { api } from './index'

export default {
  // 查询门店
  queryStore: params => api.get('/admin/queryStore', params),
  // 新增/修改门店
  saveOrUpdateStore: params => api.post('/admin/saveOrUpdateStore', params),
  // 查询预约订单
  queryReserveWashList: (params) => api.post('/admin/queryReserveWashList', params),
  // 完成预约订单
  finishReserveWash: (params) => api.post('/admin/finishReserveWash', params),
  // 收银台订单创建
  insertOrder: (params) => api.post('/admin/store/insertOrder', params),
  // 收银台订单查询 /admin/store/queryList
  queryList: (params) => api.post('/admin/store/queryList', params)
}
