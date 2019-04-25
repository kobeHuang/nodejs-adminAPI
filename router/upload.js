import Router from 'koa-router';

export default (app) => {
    const router = new Router();

    router.post('/upload', app.controller.upload);

    return router;
}