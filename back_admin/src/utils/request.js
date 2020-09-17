//引入axios
import axios from "axios"

//引入element-ui的loading加载
import { Loading } from 'element-ui';

//引入vuex
// import store from "../store/index.js";
import {getToken} from "../utils/auth.js"
//封装loading加载
const loading = {
    loadingInstance: null,
    open() {
        if (this.loadingInstance === null) {
            this.loadingInstance = Loading.service({
                target: ".main",
                text: "正在加载中",
                background: "rgba(0,0,0,0.5)"
            });
        }
    },
    close() {
        if (this.loadingInstance !== null) {
            this.loadingInstance.close();
        }
        this.loadingInstance = null;
    }
}

//创建axios实例
const request = axios.create({
    baseURL: process.env.VUE_APP_API_NAME,
    withCredentials: true ,
    timeout: 3000
})

//设置请求拦截
request.interceptors.request.use(function (config) {
      //进行loading加载
      loading.open();
      
      //获取vuex里面保存的token通过header发送给后台
      const token = getToken() ? getToken() : ""
      config.headers.token = token;

    // 在发送请求之前做些什么
    return config;
}, function (error) {
    //关闭loading加载
    loading.close();


    // 对请求错误做些什么
    return Promise.reject(error);
});

//设置响应拦截
request.interceptors.response.use(function (response) {
    //关闭loading加载
    loading.close();

    // 对响应数据做点什么
    return response;
}, function (error) {
    //关闭loading加载
    loading.close();


    // 对响应错误做点什么
    return Promise.reject(error);
});

//导出实例对象
export default request