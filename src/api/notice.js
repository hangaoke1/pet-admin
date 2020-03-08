/**
 * 公告管理
 */
import request from '@/utils/request'

export function queryNotice() {
  return request({
    url: '/admin/queryNotice',
    method: 'get'
  })
}

export function insertNotice(data) {
  return request({
    url: '/admin/insertNotice',
    method: 'post',
    data
  })
}

export function updateNotice(data) {
  return request({
    url: '/admin/updateNotice',
    method: 'post',
    data
  })
}

export function deleteNotice(data) {
  return request({
    url: '/admin/deleteNotice',
    method: 'post',
    data
  })
}
