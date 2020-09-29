/**
 * 分类管理
 */
import { api } from './index'

export default {
  // 查询分类
  queryProductCategory: params => api.post('/admin/queryProductCategory', params),
  // 新增 or 编辑 分类
  saveOrUpdate: params => api.post('/admin/productCategory/saveOrUpdate', params),
  // 删除分类
  del: params => api.get('/admin/productCategory/del', params)
}
