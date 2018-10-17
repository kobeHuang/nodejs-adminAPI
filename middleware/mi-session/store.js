const mongoose = require('mongoose');

const schema = {
    _id: String,
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
        connection = mongoose,
        expires = 86400,
        name = "Session"
    } = {}){
        const updateAt = {...schema.updateAt, expires};
        const { Schema } = mongoose;
        this.session = connection.model(name, new Schema(...schema, updateAt,), collection); 
    }

    async get(id) {
        const { session } = this;
        const { data } = await session.findById(id) || {};
        return data;
    }

    async set(id, data, maxAge, { changed, rolling }) {
        if(changed || rolling){
            const { session } = this;
            const record = { _id: id, data, updateAt: new Date() };
            await session.findByIdAndUpdate(id, record, { upsert: true, safe: true });
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