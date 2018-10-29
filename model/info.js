const mongoose = require('mongoose');
const db = require('./db');

let InfoSchema = new mongoose.Schema({
    title: String,
    classify: String,
    img: String,
    content: String,
    order: Number,
    views: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    isComment: Boolean
},{
    timestamps: true
});

/*
 * 自增长阅读量
 */
InfoSchema.static.findByView = function(id){

}

InfoSchema.pre('save', (next) => {
    if(next.isNew){
        this.createAt = this.updateAt = new Date();
    }else{
        this.updateAt = new Date();
    }
});


let Info = db.model('Info', InfoSchema);

module.exports = Info;

