const mongoose = require('mongoose');
const db = require('./db');

let LifeImageSchema = new mongoose.Schema({
    topic: String,
    img: String
},{
    timestamps: true
});


LifeImageSchema.pre('save', (next) => {
    if(next.isNew){
        this.createAt = this.updateAt = new Date();
    }else{
        this.updateAt = new Date();
    }
});

const LifeImage = db.model('LifeImage', LifeImageSchema);

module.exports = LifeImage;