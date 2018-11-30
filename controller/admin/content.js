const rename = require('../rename');

class Content {
    static async intro(ctx, next){
        try{
            const { app } = ctx;

            const data = await app.dbHelper.content.findIntro();
            
            ctx.body = {
                code: "0",
                data
            }
        }catch(e){
            ctx.sendError('1');
        }
    }

    static async intro_save(ctx, next){
        try{
            const { app } = ctx;
            const { _id, title, content } = ctx.request.body;

            if([title, content].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.content.insertIntro({ _id, title, content });
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


module.exports = Content;