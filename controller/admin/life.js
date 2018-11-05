const rename = require('../rename');

class Life {
    static async list(ctx, next){
        try{
            const { app } = ctx;
            const {
                keywords = '',
                pageNo = 1,
                pageSize = 10
            } = ctx.request.query;

            const data = await app.dbHelper.life.findLife({ keywords, pageNo, pageSize });

            ctx.body = {
                code: "0",
                data: {
                    items: data,
                    pageNo,
                    pageSize
                }
            }
        }catch(e){
            ctx.sendError('1');
        }
    }


    static async save(ctx, next){
        try{
            const { app } = ctx;
            const { 
                _id, 
                title, 
                images, 
                intro, 
                order 
            } = ctx.request.body;

            if([title, images, intro, order].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.life.insertLife({ _id, title, images, intro, order });
                if(result.ok) {
                    rename(images);

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


    static async del(ctx, next){
        try{
            const { app } = ctx;
            const { ids } = ctx.request.body;

            if(!ids){
                ctx.sendError('100');
            }else{
                const result = await app.dbHelper.life.delLife({ids});
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

module.exports = Life;