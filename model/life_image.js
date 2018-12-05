const mongoose = require('mongoose');
const db = require('./db');

let LifeImageSchema = new mongoose.Schema({
    topic: String,
    img: String
},{
    timestamps: true
});


const LifeImage = db.model('LifeImage', LifeImageSchema);

module.exports = LifeImage;