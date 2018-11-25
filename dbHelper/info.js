/*
 * info
 * info数据库操作助手
 */

const ObjectId = require('mongodb').ObjectId;
const infoModel = require('../model/info');
const infoClassifyModel = require('../model/info_classify');

class Info{
    static async findInfoClassify(){
        const result = await infoClassifyModel.find() || [];
        return result;
    }

    static async insertClassify({ _id, name, icon, status }){
        let result = '';

        if(url.indexOf('tmp/') != -1){
            url = url.replace('tmp/', 'upload/');
        }

        if(_id){
            result = await infoClassifyModel.updateOne({_id: ObjectId(_id)}, {$set: {name, icon, status}}, {upsert: true});
        }else{
            result = await infoClassifyModel.insertMany([{name, icon, status}]);      
        }

        return result;
    }

    static async findInfo({ classify, keywords, pageNo, pageSize }){
        let result = [];
        const start = (pageNo - 1) * pageSize;
        if(classify === undefined && !keywords){
            result = await infoModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];
        }else{
            let query = {};
            classify !== undefined && (
                query.classify = classify
            )
            keywords && (
                query.title = { $regex: keywords }
            )
            result = await infoModel.find({ query }).limit(pageSize).skip(start).sort({order: -1}) || [];
        }

        return result;
    }

    static async insertInfo({ _id, title, classify, img, content, order, isComment }){
        if(img.indexOf('temp/') != -1){
            img = img.replace('temp/', 'upload/');
        }

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

module.exports = Info;