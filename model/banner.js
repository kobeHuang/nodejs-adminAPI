/*
 * banner图文档结构
 */

import mongoose from 'mongoose';
import db from './db';

let BannerSchema = new mongoose.Schema({
    title: String,
    url: String,
    pos: String,
    isShow: Boolean
},{
    timestamps: true
})


let Banner = db.model('Banner', BannerSchema);

export default Banner;