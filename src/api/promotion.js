import request from '@/utils/request'

export function getPromotionsList(){
    return request({
        url:'/promotion/show',
        method:'get'
    })
}