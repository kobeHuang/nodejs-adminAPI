/*
 *  匹配管理平台 API请求
 */
const Router = require('koa-router');

module.exports = () => {
    const router = new Router({
        prefix: '/admin'
    });

    
    return router;
}