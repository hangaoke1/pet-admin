/**
 * 订单管理
 */
import { api } from './index';

export default {
  /** 商城订单 */
  // 商城订单查询
  onlineOrderQuery: (params) => api.post('/admin/queryOrder', params),
  // 查询物流轨迹
  onlineLogisticsQuery: (params) => api.get('/admin/queryLogistics', params),
  // 商城订单发货
  onlineOrderShip: (params) => api.post('/admin/shipOrder', params),
  // 商城订单关闭
  onlineOrderClose: (params) => api.get('/admin/closeOrder', params),
  // 商城订单备注
  onlineOrderRemark: (params) => api.get('/admin/remarkOrder', params),
  // 商城订单修改收件人信息
  onlineOrderAlterAddress: (params) => api.post('/admin/alterAddress', params),
  // 审核退货
  onlineOrderAuditReturn: (params) => api.get('/admin/auditReturn', params),
  // 审核退款
  onlineOrderAuditRefund: (params) => api.get('/admin/auditRefund', params),
  // 关闭退货 / 退款 warrantyStatus 2退款关闭 5退货关闭
  onlineRefundClose: (params) => api.get('/admin/close/warrantyOrder', params),

  /** 收银台订单 */
  cashOrderCreate: (params) => api.post('/admin/store/insertOrder', params),
  cashOrderQuery: (params) => api.post('/admin/store/queryList', params),

  /** 线上预约订单 */
  subscribeOrderQuery: (params) => api.post('/admin/queryReserveWashList', params),
  subscribeOrderFinish: (params) => api.post('/admin/finishReserveWash', params),
  subscribeOrderCalendar: (params) => api.post('/admin/reserve/calendar', params),

  /** 线上寄养订单 */
  grewOrderQuery: params => api.post('/admin/grew/queryList', params),
  grewOrderDel: params => api.post('/admin/grew/del', params),
  grewOrderSaveOrUpdate: params => api.post('/admin/grew/saveOrUpdate', params)

};
