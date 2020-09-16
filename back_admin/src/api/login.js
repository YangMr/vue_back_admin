//引入封装axios请求配置
import request from '../utils/request.js'

/*封装登录相关的api接口*/
//登录接口
export function login(form){
    return request({
        url : "/admin/login",
        data : form,
        method : "POST"
    })
}
//退出登录接口
export function logOut(){
    return request({
        url : "/admin/logout",
        method : "POST"
    })
}


