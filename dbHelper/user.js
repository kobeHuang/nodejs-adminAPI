/*
 * admin--User
 * 用户数据库操作助手
 */
const mongoose = require('mongoose');
const User = mongoose.model('User');


class User {
    /*
     * 根据账号查找用户信息
     * @param   account
     * @return  Object
     */
    static async findByAccount({account}) {
        let query = User.find({account});
        let res = null;

        await query.exec((err,user) => {
            if(err) {
                res = {};
            }else{
                res = user;
            }
        })

        return res;
    }
}

module.exports = User;