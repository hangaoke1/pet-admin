/**
 * 优惠券接口
 */
import { api } from './index';

export default {
  // 查询
  queryList: (params) => api.post('/admin/coupons/queryList', params),
  // 新增or编辑
  saveOrUpdate: (params) => api.post('/admin/coupon/saveOrUpdate', params),
  // 发放
  give: (params) => api.post('/admin/coupons/give', params)
};
