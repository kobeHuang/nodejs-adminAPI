/*
 * info
 * info图数据库操作助手
 */

const ObjectId = require('mongodb').ObjectId ;
const infoModel = require('../model/banner');
const infoClassifyModel = require('../model/banner_pos');

class Info{
    static async findInfoClassify(){
        const result = await infoClassifyModel.find() || [];
        return result;
    }

    static async insertClassify({ _id, name, icon, status }){
        const result = await bannerModel.updateOne({_id: ObjectId(_id)}, {$set: {name, icon, status}}, {upsert: true});

        return result;
    }

    static async findInfo({ classify }){
        let result = [];
        if(classify === undefined){
            result = await infoModel.find() || [];
        }else{
            result = await infoModel.find({classify}) || [];
        }

        return result;
    }

    static async insertInfo({ _id, title, classify, img, content, order, isComment }){
        const result = await infoModel.updateOne({_id: ObjectId(_id)}, {$set: {title, classify, img, content, order, isComment}}, {upsert: true});

        return result;
    }

    static async delInfo({ ids }){
        let idArr = ids.split(','),
            objIds = [];
        idArr.forEach(id => {
            objIds.push(ObjectId(id));
        });
        const result = await infoModel.deleteMany({_id: {$in: objIds}});
        return result;
    }


}

