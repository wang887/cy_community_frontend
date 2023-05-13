import request from '@/utils/request'

// 列表
export function getBillboard(){
    return request({
        url:'/question/list',
        method:'get'
    })
}
//创建
export function getBillboard(){
    return request({
        url:'/question/create',
        method:'post'
    })
}

//删除

export function getBillboard(){
    return request({
        url:'/question/del',
        method:'get'
    })
}
//查看某一个问题
export function getBillboard(){
    return request({
        url:'/question/detail',
        method:'get'
    })
}