
/*
 *  连接数据库
 */

const mongoose = require('mongoose');
const chalk = require('chalk');

const db = mongoose.createConnection('mongodb://127.0.0.1/campus');
const success = chalk.bold.green;
const error = chalk.bold.red;

db.once('open', (cb) => {
    console.log(success('数据库连接成功'));
});

db.on('error', (cb) => {
    console.log(error('数据库连接成功'));
});


module.exports = db;

