/*
 * content
 * content数据库操作助手
 */
const ObjectId = require('mongodb').ObjectId;
const contentModel = require('../model/content');

class Content{
    static async findIntro(){
        
        let result = await contentModel.find({_id: ObjectId('5c00ee1c62792b962210ffb1')}) || [];

        if(result.length > 0){
            result = result[0];
        }

        return result;
    }

    static async insertIntro({ _id, title, content }){
      
        const result = await contentModel.updateOne({_id: ObjectId(_id)}, {$set: {title, content}}, {upsert: true});

        return result;
    }
}

module.exports = Content;