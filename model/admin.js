/*
 * 后台管理员文档结构
 */

const mongoose = require('mongoose');
const db = require('./db');

let AdminSchema = new mongoose.Schema({
    phone: String,
    account: String,
    password: String,
    level: Number,
    nickName: String
},{
    timestamps: true
});


AdminSchema.pre('save', (next) => {
    if(this.isNew) {
        this.createAt = this.updateAt = new Date();
    }else{
        this.updateAt = new Date();
    }

    next();
});

let Admin = db.model('Admin', AdminSchema);


module.exports = Admin