import request from '@/utils/request'

export function getList(pageNo,size,tab){
    return request(
        {
            url:'/post/list',
            method:'get',
            params:{pageNo:pageNo,size:size,tab:tab}
        }
    )
}

//发布
export function post(topic){
    return request(
        {
            url:'/post/create',
            method:'post',
            data:topic
        }
    )
}

//详情
export function getTopic(id){
    return request({
        url:'/post',
        method:'get',
        params:{id:id},
    })
}


// 获取详情页推荐
export function getRecommendTopics(id) {
    return request({
      url: '/post/recommend',
      method: 'get',
      params: {
        topicId: id
      }
    })
}

//帖子更新
export function update(params) {
    return request({
      url: '/post/update',
      method: 'post',
      data:params,
    })
}

//帖子删除
export function deleteTopic(id) {
    return request({
      url: `/post/delete/${id}`,
      method: 'delete'
    })
}