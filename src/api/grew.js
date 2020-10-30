/**
 * 寄养接口
 */
import { api } from './index';

export default {
  // 查询寄养
  queryList: (params) => api.post('/admin/grew/queryList', params),
  // 删除寄养
  del: (params) => api.post('/admin/grew/del', params),
  // 新增or编辑 寄养
  saveOrUpdate: (params) => api.post('/admin/grew/saveOrUpdate', params),
  // 接收寄养、完成寄养  确认寄养时传 2，结束寄养时传 0
  confirm: (params) => api.get('/admin/confirm/grew', params)
};
