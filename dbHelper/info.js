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

        if(icon.indexOf('tmp/') != -1){
            icon = icon.replace('tmp/', 'upload/');
        }

        if(_id){
            result = await infoClassifyModel.updateOne({_id: ObjectId(_id)}, {$set: {name, icon, status}}, {upsert: true});
        }else{
            result = await infoClassifyModel.insertMany([{name, icon, status}]);      
        }

        return result;
    }

    static async delClassify({name}){
        
        const dcRes = await infoClassifyModel.deleteMany({name});
        console.log(dcRes);
        if(dcRes.ok){
            const diRes = await infoModel.deleteMany({classify: name});
            console.log(diRes);
            return diRes;
        }else{
            return {
                ok: false
            }
        }
    }

    static async findInfo({ classify, keywords, pageNo, pageSize, status }){
        let result = [];
        let total;
        const start = (pageNo - 1) * pageSize;
        if(!classify && !keywords && status === undefined){
            total = await infoModel.find().count();
            result = await infoModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];
        }else{
            let query = {};
            classify !== undefined && (
                query.classify = classify
            )
            keywords && (
                query.title = { $regex: keywords }
            )
            status !== undefined && (
                query.status = status
            )
            total = await infoModel.find({ query }).count();
            result = await infoModel.find({ query }).limit(pageSize).skip(start).sort({order: -1}) || [];
        }

        return {
            total,
            result
        };
    }

    static async insertInfo({ _id, title, classify, img, content, order, isComment }){
        let result = null;
        if(img.indexOf('tmp/') != -1){
            img = img.replace('tmp/', 'upload/');
        }

        if(_id){
            result = await infoModel.updateOne({_id: ObjectId(_id)}, {$set: {title, classify, img, content, order, isComment}}, {upsert: true});
       }else{
            result = await infoModel.insertMany([{title, classify, img, content, order, isComment}]);      
       }

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