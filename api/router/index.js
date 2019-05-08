import Router from 'koa-router';
import admin from './admin';
import upload from './upload';
import appRouter from './app';



export default (app) => {
    const router = new Router();

    const router_admin = admin(app);
    const router_upload = upload(app);
    const router_app = appRouter(app);
    router.use('/api', router_admin.routes(), router_admin.allowedMethods());
    router.use('/api', router_upload.routes(), router_upload.allowedMethods());
    router.use('/api', router_app.routes(), router_app.allowedMethods());
    
    app.use(router.routes())
       .use(router.allowedMethods())
}