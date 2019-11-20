
//配置
require.config({
    paths:{ // 模块和路径
        jquery:"../../node_modules/jquery/dist/jquery.min",
        md5:"./jquery.md5",
        reg:"./reg"
    },
    shim:{
        md5:['jquery']
    }
});

require(['jquery','reg'],function($,reg){
    reg.regEv('.reg');
})