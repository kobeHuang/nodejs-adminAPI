const mongoose = require('mongoose');
const db = require('./db');
const counterModel = require('./counter');

let MenuSchema = new mongoose.Schema({
    name: String,
    icon: String,
    order: String,
    type: Number
},{
    timestamps: true
});

//此处不能使用箭头函数，否则this指向当前作用域
MenuSchema.pre('save', function(next) {
    if(this.isNew){
        let doc = this;
        counterModel.findOneAndUpdate({_id: 'menuId'}, {$inc: {seq: 1}}, { new: true, upsert: true }, function(error, counter) {
            if (error)
                return next(error);
            //doc.update({},{ $set: { type: counter.seq } });
            doc.type = counter.seq;
            next();
        });
    } 
});

let Menu = db.model('Menu', MenuSchema);

module.exports = Menu;