const Path = require('path');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const staticFiles = require('koa-static');

const mount = require('./mi-mount');
const api_error = require('./mi-api-error');

const session_config = {
    key: 'koa:sess',
    maxAge:86400000,
    overWrite:true,
    httpOnly:true,
    rolling:false,
    renew:false,
    siged:true
}

module.exports = (app) => {

    app.use(staticFiles(Path.resolve(__dirname, '../publc')));

    app.use(session(session_config, app));
    app.use(json());
    app.use(bodyParser());

    app.use(api_error());

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