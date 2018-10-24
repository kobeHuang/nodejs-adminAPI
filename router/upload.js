const Router = require('koa-router');

module.exports = (app) => {
    const router = new Router();

    router.post('/upload', app.controller.upload);

    return router;
}