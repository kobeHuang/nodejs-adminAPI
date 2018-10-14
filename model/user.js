const mongoose = require('mongoose');
const db = require('./db');

const UserSchema = new mongoose.Schema({
    phone: String,
    account: String,
    password: String,
    level: Number,
    nickName: String,
    token: String
},{
    timestamps: true
});


UserSchema.pre('save', (next) => {
    if(this.isNew) {
        this.createAt = this.updateAt = Date.now();
    }else{
        this.updateAt = Date.now();
    }
});


export default mongoose.model('User', UserSchema)