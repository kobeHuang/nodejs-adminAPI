import KoaRouter from 'koa-router';
import React from 'react';
import { StaticRouter } from 'react-router';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import ReatDOMServe from 'react-dom/server';
import { Helmet } from "react-helmet";

import ServeDOM from '../app/app';

const Router = new KoaRouter();

Router.get('*', async (ctx, next) => {
    const url = ctx.request.url.replace('/app', '');
    const css = new Set();
    const context =  {css: []};
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
    const html = ReatDOMServe.renderToString(
        <StaticRouter basename="/app" context={context} location={url}>
            <StyleContext.Provider value={{ insertCss }}>
                <ServeDOM />
            </StyleContext.Provider>
        </StaticRouter>
    )
    const helmet = Helmet.renderStatic();

    await ctx.render('index', {
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        root: html,
        insertCss: [...css].join('')
    })
});

export default Router;