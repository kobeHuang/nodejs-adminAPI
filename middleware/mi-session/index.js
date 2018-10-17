/*
 *  将session保存在mongodb
 */

const koaSession = require('koa-session');
const db = require('../../model/db');
const MongooseStore = require('./store');

const session_config = {
    key: 'koa:campusSess',
    maxAge:86400000,
    overWrite:true,
    httpOnly:true,
    rolling:false,
    renew:false,
    siged:true,
    store: new MongooseStore({
        connection: db
    })
};

module.exports = (app) => {
    app.keys = ['1218705779913980b192f0abad40c1aa'];
    app.use(koaSession(session_config, app));
}