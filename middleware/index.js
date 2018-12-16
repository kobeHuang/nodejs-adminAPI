const Path = require('path');
//const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const staticFiles = require('koa-static');
const koaViews = require('koa-views');
const koaBody = require('koa-body');

const mount = require('./mi-mount');
const api_error = require('./mi-api-error');
const session = require('./mi-session');
const validate = require('./mi-validate');

function getUploadDirName(){
    const date = new Date();
    let month = Number.parseInt(date.getMonth()) + 1;
    month = month.toString().length > 1 ? month : `0${month}`;
    const dir = `${date.getFullYear()}${month}${date.getDate()}`;
    return dir;
}

module.exports = (app) => {

    //设置静态路径
    app.use(staticFiles(Path.resolve(__dirname, '../public')));
    //将ejs设置为我们的模板引擎
    app.use(koaViews(Path.resolve(__dirname, '../views', { map: { html: 'ejs' } })));

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