import KoaRouter from 'koa-router';
import React from 'react';
import { StaticRouter } from 'react-router';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import ReatDOMServe from 'react-dom/server';

import ServeDOM from '../app/server';

const Router = new KoaRouter();

Router.get('*', async (ctx, next) => {
    const url = ctx.request.url.replace('/app', '');
    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
    const context =  {css: []};
    const html = ReatDOMServe.renderToString(
        <StaticRouter basename="/app" context={context} location={url}>
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

export default Router;