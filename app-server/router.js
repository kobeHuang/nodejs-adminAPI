import KoaRouter from 'koa-router';
import React from 'react';
import { StaticRouter } from 'react-router';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import ReatDOMServe from 'react-dom/server';
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import { matchRoutes, renderRoutes } from 'react-router-config'

import { getStore } from '../app/store';
import routes from '../app/routes';

const Router = new KoaRouter();

Router.get('*', async (ctx, next) => {
    const url = ctx.request.url.replace('/app','');
    const css = new Set();
    const context =  {css: []};
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));
    const store = getStore(ctx.request);
    // 根据路由的路径，来往store里面加数据
	const matchedRoutes = matchRoutes(routes, url);
	// 让matchRoutes里面所有的组件，对应的loadData方法执行一次
    const promises = [];
    matchedRoutes.forEach(item => {
		if (item.route.loadData) {
			const promise = new Promise((resolve, reject) => {
				item.route.loadData(store).then(resolve).catch(resolve);
			})
			promises.push(promise);
		}
    })

    const result = await Promise.all(promises);

    const html = ReatDOMServe.renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={url}>
                <StyleContext.Provider value={{ insertCss }}>
                    {renderRoutes(routes)}
                </StyleContext.Provider>
            </StaticRouter>
        </Provider>
    )
    const helmet = Helmet.renderStatic();
    await ctx.render('index', {
        state: JSON.stringify(store.getState()),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        root: html,
        insertCss: [...css].join('')
    })
})


export default Router;