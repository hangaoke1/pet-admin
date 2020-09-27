/**
 * 商城订单管理
 */
import { api } from './index'

export default {
  queryOrder: params => api.post('/admin/queryOrder', params),
  shipOrder: params => api.post('/admin/shipOrder', params)
}
