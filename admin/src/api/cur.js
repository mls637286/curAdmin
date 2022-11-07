import request from '@/utils/request'

export const getCurGroup = (query) => {
  return request({
    url: '/api/group/list',
    method: 'get',
    params: query
  })
}
