/*
 * life
 * life数据库操作助手
 */

const ObjectId = require('mongodb').ObjectId ;
const lifeModel = require('../model/life');
const lifeImageModel = require('../model/life_image');

class Life{
    static async findLife(){
        let result = [];
        result = await lifeModel.find().sort({order: -1}) || [];

        return result;
    }


    static async insertLife({ _id, title, order }) {
        let result = null;

        if(_id){
            result = await lifeModel.updateOne({_id: ObjectId(_id)}, {$set: {title, order}}, {upsert: true});
        }else{
            result = await lifeModel.insertMany([{title, order}]);      
        }

        return result;
    }
    
    static async delLife({ title }){

        const dcRes = await infoClassifyModel.deleteMany({title});
       
        if(dcRes.ok){
            const diRes = await infoModel.deleteMany({topic: title});
            return diRes;
        }else{
            return {
                ok: false
            }
        }
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