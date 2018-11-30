/*
 * life
 * life数据库操作助手
 */

const ObjectId = require('mongodb').ObjectId ;
const lifeModel = require('../model/life');
const lifeImageModel = require('../model/life_image');

class Life{
    static async findLife({ pageNo, pageSize }){
        let result = [];
        let total;
        const start = (pageNo - 1) * pageSize;
        total = await lifeModel.find().count();
        result = await lifeModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];

        return {
            total,
            result
        };
    }


    static async insertLife({ _id, title, imgs, order }) {
        let result = null;
        const imgArr = imgs.split(',');

        let images = imgArr.map(img => {
            return img.replace('tmp/', 'upload/')
        });

        if(_id){
            result = await lifeModel.updateOne({_id: ObjectId(_id)}, {$set: {title, imgs: images.join(','), order}}, {upsert: true});
        }else{
            result = await lifeModel.insertMany([{title, imgs: images.join(','), order}]);      
        }

        return result;
    }
    
    static async delLife({ ids }){

        let idArr = ids.split(','),
            objIds = [];
        idArr.forEach(id => {
            objIds.push(ObjectId(id));
        });
        const result = await lifeModel.deleteMany({_id: {$in: objIds}});
        return result;
    }


    /*
     * life_image
     */
    static async findLifeImage({ topic, pageNo, pageSize }){
        let result = [];
        let total;
        const start = (pageNo - 1) * pageSize;

        if(!topic){
            total = await lifeImageModel.find().count();
            result = await lifeImageModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];
        }else{
            total = await lifeImageModel.find({ topic }).count();
            result = await lifeImageModel.find({ topic }).limit(pageSize).skip(start).sort({order: -1}) || [];
        }

        return {
            total,
            result
        };
    }

    static async insertLifeImage({ _id, topic, img }) {
        let result = null;

        if(img.indexOf('tmp/') != -1){
            img = img.replace('tmp/', 'upload/');
        }

        if(_id){
            result = await lifeImageModel.updateOne({_id: ObjectId(_id)}, {$set: {topic, img}}, {upsert: true});
        }else{
            result = await lifeImageModel.insertMany([{topic, img}]);      
        }

        return result;
    }

    static async delLifeImage({ ids }){
        let idArr = ids.split(','),
            objIds = [];
        idArr.forEach(id => {
            objIds.push(ObjectId(id));
        });
        const result = await lifeImageModel.deleteMany({_id: {$in: objIds}});
        return result;
    }
}

module.exports = Life;