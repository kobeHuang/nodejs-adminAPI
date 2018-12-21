const Router = require('koa-router')();
const React = require('react');
const ReatDOMServe = require('react-dom/server');

import App from '../app/server';


Router.get('*', async (ctx, next) => {
    const url = ctx.request.url.replace('/app', '');
    const context = {};
    const html = ReatDOMServe.renderToString(<App url={url} context={context} />)
    await ctx.render('index', {
        root: html
    })
});

module.exports = Router;