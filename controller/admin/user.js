

class User {
    /*
     * desc: 登录验证，登录成功将登录状态保存在session
     * @param {String} account
     * @param {String} password
     * return {session, res}
     */
    static async login(ctx, next) {
        try{
            const { app } = ctx;
            const req = ctx.request.body;
            const { account, password } = req;

            if(!account || !password){
                ctx.body = {
                    result: 0,
                    msg: '提交的信息有误，请重试'
                }
            }

            const user = await app.dbHelper.user.findByAccount({account});

            if(Object.keys(user).length != 0) {
                if(user.password === password){
                    const _user = Object.assign({}, user);
                    delete _user.password;
                    
                    ctx.session.user = user.account;
                    ctx.body = {
                        result: 1,
                        data: _user
                    }
                }else{
                    ctx.body = {
                        result: 0,
                        msg: '密码不正确'
                    }
                }
            }else{
                ctx.body = {
                    result: 0,
                    msg: '用户不存在'
                }
            }
        }catch(e) {
            ctx.body = {
                result: 0,
                msg: e.message
            }
        }
    }
}

module.exports = User;