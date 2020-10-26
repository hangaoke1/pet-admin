/**
 * 门店订单管理
 */
import { api } from './index'

export default {
  queryReserveWashList: params => api.post('/admin/queryReserveWashList', params),
  finishReserveWash: params => api.post('/admin/finishReserveWash', params),
  // 收银台订单
  insertOrder: params => api.post('/admin/store/insertOrder', params)
}
