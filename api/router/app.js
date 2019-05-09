/*
 *  匹配webapp API请求
 */
import Router from 'koa-router';

export default (app) => {
    const router = new Router({
        prefix: '/app'
    });

    //首页
    router.get('/getHomeData', app.controller.app.home.all);

    //资讯详情
    router.get('/getInfoDetail', app.controller.app.detail.info);

    return router;
}