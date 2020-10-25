/**
 * 服务管理
 */
import { api } from './index';

export default {
  queryList: (params) => api.post('/admin/meal/queryList', params),
  queryTreeList: (params) => api.post('/admin/meal/queryTreeList', params),
  del: (params) => api.post('/admin/meal/del', params),
  saveOrUpdate: (params) => api.post('/admin/meal/saveOrUpdate', params)
};
