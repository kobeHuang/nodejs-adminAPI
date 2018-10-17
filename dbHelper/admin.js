/*
 * admin--User
 * 用户数据库操作助手
 */
const adminModel = require('../model/admin');

let to = require('./to');


class Admin {
    /*
     * 根据账号查找用户信息
     * @param   account
     * @return  Object
     */
    static async findByAccount({account}) {
        
        const res = await adminModel.find({account}) || [];
        
        return res;
    }

    /*
     * 增加用户
     */
    static async addUser(user) {
        let res = null, hasUser;
        hasUser = await Admin.findByAccount({account: user.account}) || [];
        
        if(hasUser.length > 0){
            res = {};
        }else{
            const _user = new adminModel(user);
            res = await _user.save();  
             
        }

        return res;
    }
}

module.exports = Admin;