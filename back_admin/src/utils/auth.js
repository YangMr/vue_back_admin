//保存到本地token的常量名
const ADMIN_TOKEN = "token";

//保存到本地info的常量名
const ADMIN_INFO = "info";

//获取token
export function getToken(){
    return localStorage.getItem(ADMIN_TOKEN);
}

//设置token
export function setToken(token){
    localStorage.setItem(ADMIN_TOKEN,token)
}

//获取用户信息
export function getInfo(){
    return localStorage.getItem(ADMIN_INFO)
}

//设置用户信息
export function setInfo(info){
    localStorage.setItem(ADMIN_INFO,JSON.stringify(info));
}

//删除token和用户信息
export function removeToken(){
    localStorage.removeItem(ADMIN_TOKEN);
    localStorage.removeItem(ADMIN_INFO);
}