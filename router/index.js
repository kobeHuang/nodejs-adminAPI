const router = require('koa-router')();
const admin = require('./admin')();

module.exports = (app) => {
    router.use('/api', admin.routes(), admin.allowedMethods());

    app.use(router.routes())
       .use(router.allowedMethods())
}