const Router = require('koa-router');

module.exports = (app) => {
    router.post('/image', app.controller.upload);
}