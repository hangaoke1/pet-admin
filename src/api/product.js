/**
 * 商品管理
 */
import { api } from './index'

export default {
  queryProducts: params => api.post('/admin/queryProducts', params),
  queryProductFullInfoById: params => api.get('/admin/queryProductFullInfoById', params),
  queryProductCategory: params => api.post('/admin/queryProductCategory', params),
  insertProduct: params => api.post('/admin/insertProduct', params),
  updateProduct: params => api.post('/admin/updateProduct', params),
  deleteProduct: params => api.post('/admin/deleteProduct', params),
  querySkuByCode: params => api.get('/admin/querySku/byCode', params)
}
