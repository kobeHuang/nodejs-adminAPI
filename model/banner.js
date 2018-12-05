/*
 * banner图文档结构
 */

const mongoose = require('mongoose');
const db = require('./db');

let BannerSchema = new mongoose.Schema({
    title: String,
    url: String,
    pos: String,
    isShow: Boolean
},{
    timestamps: true
})


let Banner = db.model('Banner', BannerSchema);

module.exports = Banner;