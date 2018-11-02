const rename = require('../rename');

class Content {
    static async list(ctx, next){
        try{
            const { app } = ctx;
            const { 
                keywords,
                pageNo = 1,
                pageSize = 10 
            } = ctx.request.query;

            const data = await app.dbHelper.content.findContent({ keywords, pageNo, pageSize });

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
            const { _id, title, content, icon, author } = ctx.request.body;

            if([title, content].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.content.insertContent({ _id, title, content, icon, author });
                if(result.ok) {
                    icon !== undefined && rename(icon);

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
