const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId ;
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
InfoSchema.static.findByView = async function(id){
    const result = await this.findById({_id: ObjectId(id)});
    await this.updateOne({_id: ObjectId(id)}, {$set: {views: result.views + 1}});
    
    return result;
}



let Info = db.model('Info', InfoSchema);

module.exports = Info;

