class Content {
    /*
     * 获取所有banner可选位置
     * return {data}
     */
    static async bannerPos(ctx, next){
        try{
            const { app } = ctx;

            const data = await app.dbHelper.banner.findBannerPos();

            ctx.body = {
                code: "0",
                data
            }

        }catch(e) {
            ctx.sendError('1');
        }
    }

    /*
     * 获取所有banner
     * return {data}
     */
    static async banners(ctx, next) {
        try{
            const { app } = ctx;
            const { pos } = ctx.request.query;

            const data = await app.dbHelper.banner.findBanners({pos});

            ctx.body = {
                code: "0",
                data
            }
        }catch(e) {
            ctx.sendError('1');
        }
    }

    /*
     * 保存banner （编辑 | 新增）
     * return {data}
     */
    static async saveBanner(ctx, next) {
        const { app } = ctx;
        co
    }
}

module.exports = Content;