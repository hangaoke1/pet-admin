/**
 * 设备管理
 */
import { api } from './index';

export default {
  queryCameraList: (params) => api.post('/admin/queryCameraList', params),
  insertCamera: (params) => api.post('/admin/insertCamera', params),
  updateCamera: (params) => api.post('/admin/updateCamera', params),
  deleteCamera: (params) => api.post('/admin/deleteCamera', params),
  // 查询设备绑定用户
  queryUserByCameraId: (params) => api.post('/admin/queryUserByCameraId', params),
  // 设备用户绑定操作 bindFlag 0表示绑定，1表示解绑
  bindCameraByUid: (params) => api.post('/admin/bindCameraByUid', params)
};
