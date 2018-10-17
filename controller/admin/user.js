class User {
    /*
     * desc: 登录验证，登录成功将登录状态保存在session
     * @param {String} account
     * @param {String} password
     * return {session, res}
     */
    static async login(ctx, next) {
        try{
            const { app, session } = ctx;
            const req = ctx.request.body;
            
            const { account, password } = req;

            if(account === undefined || password === undefined){
                ctx.sendError('100');
                return;
            }

            const admin = await app.dbHelper.admin.findByAccount({account});

            if(admin.length != 0) {

                let [user] = admin;

                if(user.password === password){
                    const _user = Object.assign({}, user);
                    delete _user.password;
                    
                    
                    ctx.body = {
                        code: "0",
                        data: _user
                    }
                }else{
                    ctx.sendError('104');
                }
            }else{
                ctx.sendError('103');
            }
        }catch(e) {
            ctx.sendError('1');
        }
    }
}

module.exports = User;