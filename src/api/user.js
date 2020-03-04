import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/admin/userInfo',
    method: 'get'
  })
}

export function queryUserList(data) {
  return request({
    url: '/admin/queryUserList',
    method: 'post',
    data
  })
}
