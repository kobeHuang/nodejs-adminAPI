const Router = require('koa-router')();
const React = require('react');
import StyleContext from 'isomorphic-style-loader/StyleContext';
const ReatDOMServe = require('react-dom/server');

import ServeDOM from '../app/server';


Router.get('*', async (ctx, next) => {
    const url = ctx.request.url.replace('/app', '');
    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
    const context = {};
    const html = ReatDOMServe.renderToString(
        <StyleContext.Provider value={{ insertCss }}>
            <ServeDOM url={url} context={context} />
        </StyleContext.Provider>
    )
    await ctx.render('index', {
        root: html,
        insertCss: [...css].join('')
    })
});

module.exports = Router;