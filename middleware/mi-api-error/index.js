

const config = {
    "0": "成功",
    "1": "未知错误",
    "2": "服务暂不可用",
    "3": "未知方法",
    "4": "无权访问该用户数据",
    "100": "请求的参数无效",
    "101": "无效签名",
    "102": "无效的 userId",
    "103": "用户不存在",
    "104": "密码错误，请重新输入",
    "105": "登录已失效",
    "106": "文件类型错误",
    "107": "请求参数不正确",
    "800": "数据存储出错了",
    "801": "指定的对象不存在",
    "802": "指定的对象已存在",
    "803": "数据库操作出错，请重试"
}

export default () => {
    function sendError(code) {
        this.body = {
            code,
            msg: config[code]
        }
    }

    return async (ctx, next) => {
        ctx.sendError = sendError.bind(ctx);
        await next();
    }
}