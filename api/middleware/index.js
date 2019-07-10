import Path from 'path';
//const bodyParser = require('koa-bodyparser');
import json from 'koa-json';
import staticFiles from 'koa-static';
import koaViews from 'koa-views';
import koaBody from 'koa-body';

// import controller from '../controller';
// import dbHelper from '../dbHelper';

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
    app.use(staticFiles(Path.resolve(process.cwd(), './public')));
    //将ejs设置为我们的模板引擎
    //app.use(koaViews(Path.resolve(process.cwd(), '../views'), { map: { html: 'ejs' } }));

    session(app);
    app.use(json());
    //app.use(bodyParser());
    app.use(koaBody({
        multipart: true,
        formidable: {
            uploadDir:Path.join(__dirname,'../../public/tmp/'),
            keepExtensions: true,
            maxFileSize: 2*1024*1024,    // 设置上传文件大小最大限制，默认2M
            onFileBegin:(name,file) => {
                const extname = Path.extname(file.name);
                const dir = Path.join(__dirname,'../../public/tmp/');
                // 重新覆盖 file.path 属性
                file.path = `${dir}/${new Date().getTime()}${extname}`;
            }
        }
    }))

    app.use(api_error());
    app.use(validate());
    
    // app['controller'] = controller;
    // app['dbHelper'] = dbHelper;

    mount({
        app,
        mounts: [
            {
                path: Path.join(__dirname, '../controller'),
                name: 'controller'
            },
            {
                path: Path.join(__dirname, '../dbHelper'),
                name: 'dbHelper'
            }
        ]
    })
}