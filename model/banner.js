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

BannerSchema.pre('save', (next) => {
    if(next.isNew){
        this.createAt = this.updateAt = new Date();
    }else{
        this.updateAt = new Date();
    }

    next();
});

let Banner = db.model('Banner', BannerSchema);

module.exports = Banner;