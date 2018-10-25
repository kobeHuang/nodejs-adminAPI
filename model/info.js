const mongoose = require('mongoose');
const db = require('./db');

let InfoSchema = new mongoose.Schema({
    title: String,
    classify: String,
    img: String,
    content: String,
    order: Number,
    views: Number,
    comments: Number,
    isComment: Boolean
},{
    timestamps: true
});

InfoSchema.pre('save', (next) => {
    if(next.isNew){
        this.createAt = this.updateAt = new Date();
    }else{
        this.updateAt = new Date();
    }
});


let Info = db.model('Info', InfoSchema);

module.exports = Info;

