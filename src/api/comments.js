import request from '@/utils/request'

export function fetchCommentsByTopicId(topic_Id) {
  return request({
    url: '/comment/get_comments',
    method: 'get',
    params: {
      topicid: topic_Id
    }
  })
}

export function pushComment(data){
    return request({
        url:'/comment/add_comment',
        method:'post',
        data:data
    })
}

//点赞
export function agreeComment(comment_id){
  return request({
    url:'/comment/agree',
    method:'get',
    params:{
      commentId:comment_id
    }
  })
}
//取消赞
export function unagreeComment(comment_id){
  return request({
    url:'/comment/unagree',
    method:'get',
    params:{
      commentId:comment_id
    }
  })
}