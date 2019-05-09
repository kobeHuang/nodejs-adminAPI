
class Detail {
    /**
     * 资讯详情
     */
    static async info(ctx, next) {
        try{
            const { app } = ctx;
            const { _id } = ctx.request.query;
            
            const data = await app.dbHelper.info.findDetail(_id);
            ctx.body = {
                code: '0',
                data: data[0]
            }
        }catch(e) {
            ctx.sendError('1');
        }
    }
}

export default Detail;