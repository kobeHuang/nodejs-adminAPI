class Info {
    /*
     * 资讯分类
     */

    static async classify_list(ctx, next){
        try{
            const { app } = ctx;
            const data = await app.dbHelper.info.findInfoClassify();

            ctx.body = {
                code: "0",
                data
            }

        }catch(e){
            ctx.sendError('1');
        }
    }

    static async classify_save(ctx, next){
        try{
            const { app } = ctx;
            const { _id, name, icon, status } = ctx.request.body;

            if([name, status].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.banner.insertBanner({ _id, name, icon, status });
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
    
    /*
     * 资讯
     */

    static async list(ctx, next){
        try{
            const { app } = ctx;
            const { classify } = ctx.request.body;

            const data = await app.dbHelper.info.findInfo({ classify });

            ctx.body = {
                code: "0",
                data
            }
        }catch(e){
            ctx.sendError('1');
        }
    }

    static async save(ctx, next){
        try{
            const { app } = ctx;
            const { _id, title, classify, img, content, order } = ctx.request.body;

            if([title, classify, img, content, order].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.info.insertInfo({ _id, title, classify, img, content, order });
                if(result.ok) {
                    ctx.body = {
                        code: "0"
                    }
                }else{
                    ctx.sendError('803');
                }
            }
        }catch(e){
            
        }
    }

    static async del(ctx, next){
        try{
            const { app } = ctx;
            const { ids } = ctx.request.body;

            if(!ids){
                ctx.sendError('100');
            }else{
                const result = await app.dbHelper.info.delInfo({ids});
                if(result.ok) {
                    ctx.body = {
                        code: "0"
                    }
                }else{
                    ctx.sendError('803');
                }
            }
        }catch(e){
            
        }
    }
}

module.exports = info;