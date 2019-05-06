/*
 * banner图显示位置文档结构
 */

import mongoose from 'mongoose';
import db from './db';

let PosSchema = new mongoose.Schema({
    pos: String
});

let BannerPos = db.model('BannerPos', PosSchema);

export default BannerPos