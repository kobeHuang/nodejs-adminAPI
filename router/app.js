const Router = require('koa-router')();
const React = require('react');
import { StaticRouter } from 'react-router';
import StyleContext from 'isomorphic-style-loader/StyleContext';
const ReatDOMServe = require('react-dom/server');

import ServeDOM from '../app/server';


Router.get('*', async (ctx, next) => {
    const url = ctx.request.url.replace('/app', '');
    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
    const context = {};
    const html = ReatDOMServe.renderToString(
        <StaticRouter basename="/app" context={{insertCss}} location={url}>
            <StyleContext.Provider value={{ insertCss }}>
                <ServeDOM />
            </StyleContext.Provider>
        </StaticRouter>
    )
    await ctx.render('index', {
        root: html,
        insertCss: [...css].join('')
    })
});

module.exports = Router;