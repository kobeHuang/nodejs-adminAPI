/*
 * banner图显示位置文档结构
 */

const mongoose = require('mongoose');
const db = require('./db');

let PosSchema = new mongoose.Schema({
    pos: String
});

let BannerPos = db.model('BannerPos', PosSchema);

module.exports = BannerPos