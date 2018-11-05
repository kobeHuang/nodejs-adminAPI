/*
 * 请求体/用户登录状态认证
 */

module.exports = () => {

    return async (ctx, next) => {
        const { session } = ctx;

        //后台校验session
        if(ctx.url.indexOf('/admin') != -1 && ctx.url.indexOf('/admin/login') == -1){

            if(JSON.stringify(session) != '{}'){
                await next();
            }else{
                ctx.sendError('105');
            }
        }else{
            await next();
        }
    }
}
