/*
 * admin--banner
 * banner图数据库操作助手
 */

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
        return 
    }
}