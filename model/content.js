const mongoose = require('mongoose');
const db = require('./db');

const ContentSchema = new mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

ContentSchema.pre('save', (next) => {
    if(next.isNew){
        this.createAt = this.updateAt = new Date();
    }else{
        this.updateAt = new Date();
    }
});


let Content = db.model('Content', ContentSchema);

module.exports = Content;