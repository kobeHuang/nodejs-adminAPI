/*
 *  匹配管理平台 API请求
 */
const Router = require('koa-router');

module.exports = (app) => {
    const router = new Router({
        prefix: '/admin'
    });

    // app.dbHelper.admin.addUser({
    //     "phone" : "13800138000", 
    //     "account" : "admin", 
    //     "password" : "21232f297a57a5a743894a0e4a801fc3", 
    //     "level" : "1", 
    //     "nickName" : "tresor"
    // });

    //登录
    router.post('/login', app.controller.admin.user.login);


    //banner图管理
    router.get('/bannerPos', app.controller.admin.banner.pos);
    router.get('/banner', app.controller.admin.banner.list);
    router.post('/banner/save', app.controller.admin.banner.save);
    router.post('/banner/del', app.controller.admin.banner.del);


    //资讯管理
    
    return router;
}