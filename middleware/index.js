const Path = require('path');
//const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const staticFiles = require('koa-static');
const koaBody = require('koa-body');

const mount = require('./mi-mount');
const api_error = require('./mi-api-error');
const session = require('./mi-session');
const validate = require('./mi-validate');

module.exports = (app) => {

    app.use(staticFiles(Path.resolve(__dirname, '../publc')));

    session(app);
    app.use(json());
    //app.use(bodyParser());
    app.use(koaBody({
        multipart: true,
        formidable: {
            uploadDir:Path.join(__dirname,'../public/temp/'),
            keepExtensions: true,
            maxFileSize: 2*1024*1024    // 设置上传文件大小最大限制，默认2M
        }
    }))

    app.use(api_error());
    app.use(validate());

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