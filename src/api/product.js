/**
 * 商品管理
 */
import request from '@/utils/request'

export function queryProducts(data) {
  return request({
    url: '/admin/queryProducts',
    method: 'post',
    data
  })
}
