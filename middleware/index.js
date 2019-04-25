const Path = require('path');
//const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const staticFiles = require('koa-static');
const koaViews = require('koa-views');
const koaBody = require('koa-body');

import mount from './mi-mount';
import api_error from './mi-api-error';
import session from './mi-session';
import validate from './mi-validate';


export default (app) => {
    /*if (process.env.NODE_ENV!=='production') {
        const koaWebpack = require('koa-webpack');
        const Webpack=require('webpack')
        const config = require('../config/webpack.client.js');
    
        let compiler=Webpack(config);
        koaWebpack({
            compiler:compiler
        })
        .then(middleware => {
            app.use(middleware);
        })
    }*/

    //设置静态路径
    app.use(staticFiles(Path.resolve(__dirname, '../public')));
    //将ejs设置为我们的模板引擎
    app.use(koaViews(Path.resolve(__dirname, '../views'), { map: { html: 'ejs' } }));

    session(app);
    app.use(json());
    //app.use(bodyParser());
    app.use(koaBody({
        multipart: true,
        formidable: {
            uploadDir:Path.join(__dirname,'../public/tmp/'),
            keepExtensions: true,
            maxFileSize: 2*1024*1024,    // 设置上传文件大小最大限制，默认2M
            onFileBegin:(name,file) => {
                const extname = Path.extname(file.name);
                const dir = Path.join(__dirname,'../public/tmp/');
                // 重新覆盖 file.path 属性
                file.path = `${dir}/${new Date().getTime()}${extname}`;
            }
        }
    }))

    app.use(api_error());
    app.use(validate());

    mount({
        app,
        mounts: [
            {
                path: './controller',
                name: 'controller'
            },
            {
                path: './controller',
                name: 'dbHelper'
            }
        ]
    })
}