import Koa from 'koa';
import Router from 'koa-router';
import staticFiles from 'koa-static';
import koaViews from 'koa-views';
import Path from 'path';
import httpProxyMiddleware from 'http-proxy-middleware';
import koaConnect from 'koa2-connect';

import appRouter from './router';

const app = new Koa();
const router = new Router();

// 代理兼容封装
const proxy = function (context, options) {
    if (typeof options === 'string') {
      options = {
        target: options
      }
    }
    return async function (ctx, next) {
      await koaConnect(httpProxyMiddleware(context, options))(ctx, next)
    }
}
  
// 代理配置
const proxyTable = {
    '/api': {
      target: 'http://127.0.0.1:3000',
      changeOrigin: true
    }
}

Object.keys(proxyTable).map(context => {
    const options = proxyTable[context]
    // 使用代理
    app.use(proxy(context, options))
})



//设置静态路径
app.use(staticFiles(Path.resolve(process.cwd(), './public')));
//将ejs设置为我们的模板引擎
app.use(koaViews(Path.resolve(process.cwd(), './views'), { map: { html: 'ejs' } }));

router.use('/app', appRouter.routes(), appRouter.allowedMethods());
    
app.use(router.routes())
    .use(router.allowedMethods())

app.listen(8080, () => {
    console.log('server is running at http://127.0.0.1:8080')
})