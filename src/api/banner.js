/**
 * 轮播图管理
 */
import request from '@/utils/request'

export function queryBanners() {
  return request({
    url: '/pet/queryBanners',
    method: 'get'
  })
}

export function insertBanner(data) {
  return request({
    url: '/admin/insertBanner',
    method: 'post',
    data
  })
}

export function updateBanner(data) {
  return request({
    url: '/admin/updateBanner',
    method: 'post',
    data
  })
}

export function deleteBanner(data) {
  return request({
    url: '/admin/deleteBanner',
    method: 'post',
    data
  })
}
