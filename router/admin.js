/*
 *  匹配管理平台 API请求
 */
const Router = require('koa-router');
const controller = require('../controller');

module.exports = () => {
    const router = new Router({
        prefix: '/admin'
    });

    router.get('/banner', app.controller.admin.banner);

    
    return router;
}