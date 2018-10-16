const mongoose = require('mongoose');
const db = require('./db');

const AdminSchema = new mongoose.Schema({
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
        this.createAt = this.updateAt = Date.now();
    }else{
        this.updateAt = Date.now();
    }
});

let Admin = db.model('Admin', AdminSchema);


module.exports = Admin