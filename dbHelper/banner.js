/*
 * banner
 * banner图数据库操作助手
 */

const ObjectId = require('mongodb').ObjectId ;
const bannerModel = require('../model/banner');
const bannerPosModel = require('../model/banner_pos');

class Banner {
    static async findBannerPos() {
        const result = await bannerPosModel.find() || [];
        return result;
    }

    static async findBanners({ pos, keywords, pageNo, pageSize, isShow }) {
        let result = [];
        let total;
        const start = (pageNo - 1) * pageSize;
        if(pos && !keywords && isShow === undefined){
            total = await bannerModel.find().count();
            result = await bannerModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];
        }else{
            let query = {};
            pos && (
                query.pos = pos
            )
            keywords && (
                query.title = { $regex: keywords }
            )
            isShow !== undefined && (
                query.isShow = isShow
            )
            total = await bannerModel.find(query).count();
            result = await bannerModel.find(query).limit(pageSize).skip(start).sort({order: -1}) || [];
        }

        return {
            total,
            result
        };
    }

    static async insertBanner({ _id, title, url, pos, isShow }){
        let result = '';

        if(url.indexOf('temp/') != -1){
            url = url.replace('temp/', 'upload/');
        }

       if(_id){
            result = await bannerModel.updateOne({_id: ObjectId(_id)}, {$set: {title, url, pos, isShow}}, {upsert: true});
       }else{
            result = await bannerModel.insertMany([{title, url, pos, isShow}]);      
       }

       console.log(result);

        return result;
    }

    static async delBanner({ids}) {
        let idArr = ids.split(','),
            objIds = [];
        idArr.forEach(id => {
            objIds.push(ObjectId(id));
        });
        const result = await bannerModel.deleteMany({_id: {$in: objIds}});
        return result;
    }
}

module.exports = Banner;