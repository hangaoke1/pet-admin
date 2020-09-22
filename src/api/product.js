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

// 查询商品详情
export function queryProductFullInfoById(data) {
  return request({
    url: '/pet/queryProductFullInfoById',
    method: 'get',
    params: data
  })
}

export function queryProductCategory(data) {
  return request({
    url: '/admin/queryProductCategory',
    method: 'post',
    data
  })
}

export function insertProduct(data) {
  return request({
    url: '/admin/insertProduct',
    method: 'post',
    data
  })
}

export function updateProduct(data) {
  return request({
    url: '/admin/updateProduct',
    method: 'post',
    data
  })
}

export function deleteProduct(data) {
  return request({
    url: '/admin/deleteProduct',
    method: 'post',
    data
  })
}
