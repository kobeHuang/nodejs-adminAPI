
class Home {
    /**
     * 首页信息
     * @param {*} ctx 
     * @param {*} next 
     */
    static async all(ctx, next) {
        try {
            const { app } = ctx;
            const banners = await app.dbHelper.banner.findBanners({ pos: '首页', pageNo: 1, pageSize: 5, isShow: true });
            const menus = await app.dbHelper.menu.findMenu({ pageNo: 1, pageSize: 6 });
            const news = await app.dbHelper.info.findInfo({ classify: '校园新闻', pageNo: 1, pageSize: 5 });
            ctx.body = {
                code: '0',
                data: {
                    banners: banners.result,
                    menus: menus.result,
                    news: news.result
                }
            }
        } catch (e) {
            ctx.sendError('1');
        } 
    }
}

export default Home;