const rename = require('../rename');

class Life {
    static async list(ctx, next){
        try{
            const { app } = ctx;
            const { 
                pageNo = 1,
                pageSize = 10
            } = ctx.request.query;

            const data = await app.dbHelper.life.findLife({ pageNo: parseInt(pageNo), pageSize: parseInt(pageSize) });

            ctx.body = {
                code: "0",
                data: {
                    items: data.result,
                    count: data.total,
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
                imgs,
                order 
            } = ctx.request.body;

            if([title, order].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.life.insertLife({ _id, title, imgs, order });
                if(result.ok || (result.length && result.length > 0)) {
                    rename(imgs);
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


    /*
     * life_image
     */
    static async lifeImage_list(ctx, next){
        try{
            const { app } = ctx;
            const {
                topic = '',
                pageNo = 1,
                pageSize = 10
            } = ctx.request.query;

            const data = await app.dbHelper.life.findLifeImage({ topic, pageNo: parseInt(pageNo), pageSize: parseInt(pageSize) });

            ctx.body = {
                code: "0",
                data: {
                    items: data.result,
                    count: data.total,
                    pageNo,
                    pageSize
                }
            }
        }catch(e){
            ctx.sendError('1');
        }
    }

    static async lifeImage_save(ctx, next){
        try{
            const { app } = ctx;
            const { 
                _id, 
                topic,
                img
            } = ctx.request.body;

            if([topic, img].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.life.insertLifeImage({ _id, topic, img });
                if(result.ok || (result.length && result.length > 0)) {
                    rename(img);
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

    static async lifeImage_del(ctx, next){
        try{
            const { app } = ctx;
            const { ids } = ctx.request.body;

            if(!ids){
                ctx.sendError('100');
            }else{
                const result = await app.dbHelper.life.delLifeImage({ids});
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