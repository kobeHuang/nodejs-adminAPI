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

    static async insertBanner({ _id, title, url, pos, isShow }){
 
        const result = await bannerModel.updateOne({_id: ObjectId(_id)}, {$set: {title, url, pos, isShow}}, {upsert: true});

        return result;
    }

    static async delBanner({ids}) {
        let idArr = ids.split(','),
            objIds = [];
        idArr.forEach(id => {
            objIds.push(ObjectId(id));
        });
        console.log(objIds);
        const result = await bannerModel.deleteMany({_id: {$in: objIds}});
        return result;
    }
}

module.exports = Banner;