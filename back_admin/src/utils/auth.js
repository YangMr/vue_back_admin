//保存到本地token的常量名
const ADMIN_TOKEN = "token";

//保存到本地info的常量名
const ADMIN_INFO = "info";

//获取token
export function getToken(){
    return sessionStorage.getItem(ADMIN_TOKEN);
}

//设置token
export function setToken(token){
    sessionStorage.setItem(ADMIN_TOKEN,token)
}

//获取用户信息
export function getInfo(){
    return sessionStorage.getItem(ADMIN_INFO)
}

//设置用户信息
export function setInfo(info){
    sessionStorage.setItem(ADMIN_INFO,JSON.stringify(info));
}

//删除token和用户信息
export function removeToken(){
    sessionStorage.removeItem(ADMIN_TOKEN);
    sessionStorage.removeItem(ADMIN_INFO);
}