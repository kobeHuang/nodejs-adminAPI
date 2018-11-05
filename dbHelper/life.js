/*
 * life
 * life数据库操作助手
 */

const ObjectId = require('mongodb').ObjectId ;
const lifeModel = require('../model/life');

class Life{
    static async findLife({ kewords, pageNo, pageSize }){
        let result = [];
        const start = (pageNo - 1) * pageSize;
        if(!keywords){
            result = await lifeModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];
        }else{
            result = await lifeModel.find({ title: { $regex: keywords } }).limit(pageSize).skip(start).sort({order: -1}) || [];
        }

        return result;
    }


    static async insertLife({ _id, title, images, intro, order }) {
        images = images.replace(/\/temp\//g, '/upload/');

        const result = await lifeModel.updateOne({_id: ObjectId(_id)}, {$set: {title, images, intro, order}}, {upsert: true});

        return result;
    }
    
    static async delLife({ ids }){
        let idArr = ids.split(','),
            objIds = [];
        idArr.forEach(id => {
            objIds.push(ObjectId(id));
        });
        const result = await infoModel.deleteMany({_id: {$in: objIds}});
        return result;
    }
}

module.exports = Life;