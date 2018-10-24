/*
 * admin--banner
 * banner图数据库操作助手
 */

const ObjectId = require('mongodb').ObjectId ;
const bannerModel = require('../model/banner');
const bannerPosModel = require('../model/banner_pos');

class Banner {
    static async findBanners({pos}) {
        let banners = [];
        if(pos === undefined){
            banners = await bannerModel.find() || [];
        }else{
            banners = await bannerModel.find({pos}) || [];
        }

        return banners;
    }


    static async findBannerPos() {
        const bannerPos = await bannerPosModel.find() || [];
        return bannerPos;
    }

    static async insertBanner(doc){
        const result = null;
        if(doc._id){
            result = await bannerModel.create(doc);
        }else{
            result = await bannerModel.update({_id: ObjectId(doc._id)}, {$set: doc});
        }

        return result;
    }

    static async delBanner({ids}) {
        let idArr = ids.split(','),
            objIds = [];
        idArr.forEach(id => {
            objIds = ObjectId(id);
        });
        const result = bannerModel.remove({_id: {$in: objIds}});
        
        return { ok } = result;
    }
}