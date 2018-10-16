/*
 *  匹配管理平台 API请求
 */
const Router = require('koa-router');

module.exports = (app) => {
    const router = new Router({
        prefix: '/admin'
    });

    router.post('/login', app.controller.admin.user.login)
    router.get('/banner', app.controller.admin.content.banners);

    
    return router;
}