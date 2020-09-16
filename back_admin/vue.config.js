module.exports = {
    lintOnSave : false,
    devServer : {
        open : true,
        port : 9999,
        https : false,
        host : "localhost",
        proxy : {
            [process.env.VUE_APP_API_NAME] : {
                target : process.env.VUE_APP_API_SERVICE,
                changeOrigin : true,
                pathRewrite : {
                    ["^" + process.env.VUE_APP_API_NAME] : "" 
                }
            }
        }
    }
}