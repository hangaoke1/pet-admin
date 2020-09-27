/**
 * 轮播图管理
 */
import { api } from './index'

export default {
  queryBanners: params => api.get('/admin/queryBanners', params),
  insertBanner: params => api.post('/admin/insertBanner', params),
  updateBanner: params => api.post('/admin/updateBanner', params),
  deleteBanner: params => api.post('/admin/deleteBanner', params)
}
