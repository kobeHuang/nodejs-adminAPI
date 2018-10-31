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
        const start = (pageNo - 1) * pageSize;
        if(pos === undefined && !keywords && isShow === undefined){
            result = await bannerModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];
        }else{
            let query = {};
            pos !== undefined && (
                query.pos = pos
            )
            keywords && (
                query.title = { $regex: keywords }
            )
            isShow !== undefined && (
                query.isShow = isShow
            )
            result = await bannerModel.find({ query }).limit(pageSize).skip(start).sort({order: -1}) || [];
        }

        return result;
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
        const result = await bannerModel.deleteMany({_id: {$in: objIds}});
        return result;
    }
}

module.exports = Banner;