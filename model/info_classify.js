const mongoose = require('mongoose');
const db = require('./db');

let ClassifySchema = new mongoose.Schema({
    name: String,
    icon: String,
    status: Boolean
},{
    timestamps: true
});

ClassifySchema.pre('save', (next) => {
    if(next.isNew){
        this.createAt = this.updateAt = new Date();
    }else{
        this.updateAt = new Date();
    }
});

let InfoClassify = db.model('InfoClassify', ClassifySchema);

module.exports = InfoClassify;