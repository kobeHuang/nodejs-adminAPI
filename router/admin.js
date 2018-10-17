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

    router.post('/login', app.controller.admin.user.login)
    router.get('/banner', app.controller.admin.content.banners);

    
    return router;
}