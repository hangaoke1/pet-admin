/**
 * 服务管理
 */
import { api } from './index';

export default {
  // 线下服务
  queryList: (params) => api.post('/admin/meal/queryList', params),
  queryTreeList: (params) => api.post('/admin/meal/queryTreeList', params),
  del: (params) => api.post('/admin/meal/del', params),
  saveOrUpdate: (params) => api.post('/admin/meal/saveOrUpdate', params),
  // 线上服务
  onlineList: (params) => api.get('/pet/mealList', params),
  onlineSaveOrUpdate: (params) => api.post('/admin/meal/alone/saveOrUpdate', params),
  onlineDelete: (params) => api.get('/admin/meal/alone/del', params)
};
