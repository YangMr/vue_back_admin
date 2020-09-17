//导入路由对象
import router from "./router/index.js"

//引入Vuex
import store from "./store/index.js"

//通过路由守卫实现页面鉴权
router.beforeEach((to,from,next)=>{
    //获取token
    const token = store.getters.get_token;

    //没有token
    if(!token) {
        if(to.path !== "/login") {
            next("/login")
        }else{
            next();
        }
    }else{ //有token
        if(to.path == "/login"){
            next("/index");
        }else{
            //获取vuex中有没有存储用户信息
            const info = store.getters.get_info;
            if(info){
                next();
            }else{
                next("/login");
            }
        }
    }
})

