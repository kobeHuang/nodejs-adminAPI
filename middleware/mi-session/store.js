/*
 *  将session 记录在数据库 collection
 */

const mongoose = require('mongoose');

const schema = {
    _id: String,
    account: String,
    type: String,
    data: Object,
    updateAt: {
        default: new Date(),
        expires: 86400,
        type: Date
    }
}

class MongooseStore {
    constructor({
        collection = "sessions",
        connection = null,
        expires = 86400,
        name = "Session"
    } = {}){
        const updateAt = {...schema.updateAt, expires};
        const { Schema } = mongoose;
        this.session = connection.model(name, new Schema({ ...schema, updateAt })); 
    }

    async get(id) {
        const { session } = this;
        const { data } = await session.findById(id) || {};
        return data;
    }

    async set(id, data, maxAge, { changed, rolling }) {
        if(changed || rolling){
            const type = data.type;
            const { session } = this;
            const record = { _id: id, account:data.account, type, data, updatedAt: new Date() };
            const oldRecord = await session.find({account: data.account, type, _id: {$ne: id}}) || [];

            /*
             *  删除之前登录同账号的session会话记录
             */
            if(oldRecord.length > 0){
                let ids = [];
                oldRecord.forEach(item => {
                    ids.push(item._id);
                });
               await session.remove({_id: {$in: ids}});
            }

            await session.findOneAndUpdate({_id: id}, record, { upsert: true, safe: true });
        }
        return data;
    }

    async destroy(id) {
        const { session } = this;
        return session.remove({_id: id});
    }

    static create(opts) {
        return new Store(opts);
    }
}

module.exports = MongooseStore;