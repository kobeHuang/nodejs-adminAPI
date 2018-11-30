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
    router.get('/infoClassify', app.controller.admin.info.classify_list);
    router.post('/infoClassify/save', app.controller.admin.info.classify_save);
    router.post('/infoClassify/del', app.controller.admin.info.classify_del);
    router.get('/info', app.controller.admin.info.list);
    router.post('/info/save', app.controller.admin.info.save);
    router.post('/info/del', app.controller.admin.info.del);


    //校园生活
    router.get('/life', app.controller.admin.life.list);
    router.post('/life/save', app.controller.admin.life.save);
    router.post('/life/del', app.controller.admin.life.del);
    router.get('/lifeImage', app.controller.admin.life.lifeImage_list);
    router.post('/lifeImage/save', app.controller.admin.life.lifeImage_save);
    router.post('/lifeImage/del', app.controller.admin.life.lifeImage_del)


    //内容管理
    router.get('/intro', app.controller.admin.content.intro);
    router.post('/intro/save', app.controller.admin.content.intro_save);
    
    return router;
}