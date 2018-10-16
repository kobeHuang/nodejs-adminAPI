/*
 * admin--User
 * 用户数据库操作助手
 */
const Admin = require('../model/admin');

let to = require('./to');


class Admin_C {
    /*
     * 根据账号查找用户信息
     * @param   account
     * @return  Object
     */
    static async findByAccount({account}) {
        let res = null, err, admin;
        
        [err, admin] = await to(Admin.find({account}));

        if(err){
            res = [];
        }else{
            res = admin;
        }

        return res;
    }
}

module.exports = Admin_C;