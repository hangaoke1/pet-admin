/**
 * 设备管理
 */
import request from '@/utils/request'

export function queryCameraList(data) {
  return request({
    url: '/admin/queryCameraList',
    method: 'post',
    data: data
  })
}

export function insertCamera(data) {
  return request({
    url: '/admin/insertCamera',
    method: 'post',
    data
  })
}

export function updateCamera(data) {
  return request({
    url: '/admin/updateCamera',
    method: 'post',
    data
  })
}

export function deleteCamera(data) {
  return request({
    url: '/admin/deleteCamera',
    method: 'post',
    data
  })
}

// 查询设备绑定用户
export function queryUserByCameraId(data) {
  return request({
    url: '/admin/queryUserByCameraId',
    method: 'post',
    data
  })
}

// 设备用户绑定操作 bindFlag 0表示绑定，1表示解绑
export function bindCameraByUid(data) {
  return request({
    url: '/admin/bindCameraByUid',
    method: 'post',
    data
  })
}
