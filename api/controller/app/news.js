
class News {

    static async list(ctx, next){ 
        try{
            const { app } = ctx;
            const { 
                pageNo = 1,
                pageSize = 10
            } = ctx.request.query;

            console.log(JSON.stringify(pageNo))


            const news = await app.dbHelper.info.findInfo({ classify: '校园新闻', pageNo: parseInt(pageNo), pageSize: parseInt(pageSize) });

            ctx.body = {
                code: '0',
                data: news.result
            }


        }catch(e) {
            ctx.sendError('1');
        }
    }
}

export default News;