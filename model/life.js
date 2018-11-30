const mongoose = require('mongoose');
const db = require('./db');

let LifeSchema = new mongoose.Schema({
    title: String,
    imgs: String,
    order: Number
},{
    timestamps: true
});


LifeSchema.pre('save', (next) => {
    if(next.isNew){
        this.createAt = this.updateAt = new Date();
    }else{
        this.updateAt = new Date();
    }
});

const Life = db.model('Life', LifeSchema);

module.exports = Life;