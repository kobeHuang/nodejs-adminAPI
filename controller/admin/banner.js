class Content {
    /*
     * 获取所有banner可选位置
     * return {data}
     */
    static async pos(ctx, next){
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
     * @params {pos: no reqiure}
     * return {data}
     */
    static async list(ctx, next) {
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
     * @params { id }
     * return {data}
     */
    static async save(ctx, next) {
        try{
            const { app } = ctx;
            const { id, title, url, pos, isShow } = ctx.request.body;

            if([title, url, pos, isShow].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.banner.insertBanner({ id, title, url, pos, isShow });
                if(result.ok) {
                    ctx.body = {
                        code: "0"
                    }
                }else{
                    ctx.sendError('803');
                }
            }

        }catch(e) {
            ctx.sendError('1');
        }
    }

    /*
     * 删除banner
     * @params { id }
     * return {data}
     */
    static async del(ctx, next) {
        try{
            const { app } = ctx;
            const { ids } = ctx.request.body;

            if(!ids){
                ctx.sendError('100');
            }else{
                const result = await app.dbHelper.delBanner({ids});
                if(result.ok) {
                    ctx.body = {
                        code: "0"
                    }
                }else{
                    ctx.sendError('803');
                }
            }
        }catch(e){
            ctx.sendError('1');
        }
    }
}

module.exports = Content;