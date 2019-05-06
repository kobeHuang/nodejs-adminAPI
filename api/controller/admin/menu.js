import rename from '../rename';

class Menu {
    static async list(ctx, next){
        try{
            const { app } = ctx;
            const { 
                pageNo = 1,
                pageSize = 10
            } = ctx.request.query;

            const data = await app.dbHelper.menu.findMenu({ pageNo: parseInt(pageNo), pageSize: parseInt(pageSize) });

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
                name,
                icon,
                order 
            } = ctx.request.body;

            if([name, icon, order].indexOf(undefined) != -1){
                ctx.sendError('107');
            }else{
                const result = await app.dbHelper.menu.insertMenu({ _id, name, icon, order });
                if(result.ok || result._id !== undefined) {
                    rename(icon);
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

    static async del(ctx, next) {
        try{
            const { app } = ctx;
            const { ids } = ctx.request.body;

            if(!ids){
                ctx.sendError('100');
            }else{
                const result = await app.dbHelper.menu.delMenu({ids});
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

export default Menu;