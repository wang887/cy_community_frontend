import request from '@/utils/request'

export function userRegister(userDTO){
    return request({
        url:'/ums/user/register',
        method:'post',
        data:userDTO
    })
}

export function userResetPwd(userDTO){
    return request({
        url:'/ums/user/resetPwd',
        method:'post',
        data:userDTO
    })
}


export function login(data){
    return request({
        url:'/ums/user/login',
        method:'post',
        data
    })
}

export function logout(data){
    return request({
        url:'/ums/user/logout',
        method:'get',
    })
}

//登陆后获取前台用户信息
export function getUserInfo(){
    return request({
        url:'/ums/user/info',
        method: 'get'
    })
}