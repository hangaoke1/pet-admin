/**
 * 商城订单管理
 */
import request from '@/utils/request'

export function queryOrder(data) {
  return request({
    url: '/admin/queryOrder',
    method: 'post',
    data
  })
}

export function shipOrder(data) {
  return request({
    url: '/admin/shipOrder',
    method: 'post',
    data
  })
}

