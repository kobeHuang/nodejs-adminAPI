const router = require('koa-router')();
const admin = require('./admin');
const upload = require('./upload');
const router_app = require('./app');

module.exports = (app) => {
    const router_admin = admin(app);
    const router_upload = upload(app);
    router.use('/api', router_admin.routes(), router_admin.allowedMethods());
    router.use('/api', router_upload.routes(), router_upload.allowedMethods());
    router.use('/app', router_app.routes(), router_app.allowedMethods());
    
    app.use(router.routes())
       .use(router.allowedMethods())
}