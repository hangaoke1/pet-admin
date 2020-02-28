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
