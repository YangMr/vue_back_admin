const routes = [
    {
        path: "/",
        name: "layout",
        redirect : {name : "index"},
        component : "Layout",
        children: [
            {
                component : "index/index"
            },
            {
                component : "shop/goods/list"
            },
            {
                component : "image/image"
            }
        ]
    },
    {
        component : "login/index"
    },
    {
        path : "*",
        redirect : {name : "index"}
    }
];


//获取路由信息
function getRoutes(){
    createRoute(routes);
    return routes;
}
//自动生成路由
function createRoute(arr){
    for(let i=0;i<arr.length;i++){
        //如果项目没有配置路由,就不再继续让下执行
        if(!arr[i].component) return;  
        //自动加载index  component : "index/index"
        const val = getValue(arr[i].component)
        //自动生成name /shop/goods/list  shop_goods
        arr[i].name =  arr[i].name || val.replace(/\//g,"_");
        //自动生成path
        arr[i].path = arr[i].path || `/${val}`;
        //如果有的话,我们需要将 component : "Layout", 转化为 component: () => import("../../views/index")
        let componentFun = import(`../../views/${arr[i].component}.vue`);
        //重写component
        arr[i].component = ()=> componentFun;
        //转化子路由的component
        if(arr[i].children && arr[i].children.length > 0){
            createRoute(arr[i].children)
        }
    }
}
//默认加载名称index的组件 
function getValue(str){
    //lastIndexOf 查找当前字符串的最后一个位置
    const index = str.lastIndexOf("/");
    //substring截取字符串
    const val = str.substring(index+1,str.length);
    //判断str == index
    if(val == "index"){
        return str.substring(index,-1);
    }
    return str;
}


export default getRoutes();
