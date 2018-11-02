/*
 * content
 * content数据库操作助手
 */

const contentModel = require('../model/content');

class Content{
    static async findContent({ keywords, pageNo, pageSize }){
        const start = (pageNo - 1) * pageSize;
        if(!keywords){
            result = await contentModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];
        }else{
            result = await contentModel.find({ title: { $regex: keywords } }).limit(pageSize).skip(start) || [];
        }

        return result;
    }

    static async insertContent({ _id, title, content, icon, author }){
        if(icon.indexOf('temp/') != -1){
            icon = icon.replace('temp/', 'upload/');
        }

        const result = await contentModel.updateOne({_id: ObjectId(_id)}, {$set: {title, content, icon, author}}, {upsert: true});

        return result;
    }
}