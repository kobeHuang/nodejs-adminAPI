const router = require('koa-router')();
const admin = require('./admin');

module.exports = (app) => {
    const router_admin = admin(app);
    router.use('/api', router_admin.routes(), router_admin.allowedMethods());

    app.use(router.routes())
       .use(router.allowedMethods())
}