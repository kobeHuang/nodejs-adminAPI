const rename = require('../rename');

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
     * list
     * @params  {pos: string, keywords: string, pageNo: number, pageSize: number }
     */
    static async list(ctx, next) {
        try{
            const { app } = ctx;
            const { 
                pos,
                keywords = '',
                pageNo = 1,
                pageSize = 10 
            } = ctx.request.query;


            const data = await app.dbHelper.banner.findBanners({ pos, keywords, pageNo: parseInt(pageNo), pageSize: parseInt(pageSize) });

            ctx.body = {
                code: "0",
                data: {
                    items: data.result,
                    count: data.total,
                    pageNo,
                    pageSize
                }
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
            const { _id, title, url, pos, isShow } = ctx.request.body;

            if([title, url, pos, isShow].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.banner.insertBanner({ _id, title, url, pos, isShow });
                if(result.ok) {
                    rename(url);
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
                const result = await app.dbHelper.banner.delBanner({ids});
                if(result.length > 0) {
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