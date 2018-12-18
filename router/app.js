const Router = require('koa-router')();
const React = require('react');
const ReatDOMServe = require('react-dom/server');

import App from '../app/server';


Router.get(/\/app.*/, async (ctx, next) => {
    const url = ctx.url.replace('/app', '');
    const context = {};
    const html = ReatDOMServe.renderToString(<App url={url} context={context} />)
    ctx.render('app', {
        root: html
    })
});

module.exports = Router;