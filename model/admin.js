/*
 * 后台管理员文档结构
 */

import mongoose from 'mongoose';
import db from './db';

let AdminSchema = new mongoose.Schema({
    phone: String,
    account: String,
    password: String,
    level: Number,
    nickName: String
},{
    timestamps: true
});

let Admin = db.model('Admin', AdminSchema);


export default Admin