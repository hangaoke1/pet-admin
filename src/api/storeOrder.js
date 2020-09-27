/**
 * 门店订单管理
 */
import { api } from './index'

export default {
  queryReserveWashList: params => api.post('/admin/queryReserveWashList', params),
  finishReserveWash: params => api.post('/admin/finishReserveWash', params)
}
