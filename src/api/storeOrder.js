/**
 * 门店订单管理
 */
import request from '@/utils/request'

export function queryReserveWashList(data) {
  return request({
    url: '/admin/queryReserveWashList',
    method: 'post',
    data
  })
}

export function finishReserveWash(data) {
  return request({
    url: '/admin/finishReserveWash',
    method: 'post',
    data
  })
}
