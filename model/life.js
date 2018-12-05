const mongoose = require('mongoose');
const db = require('./db');

let LifeSchema = new mongoose.Schema({
    title: String,
    imgs: String,
    order: Number
},{
    timestamps: true
});



const Life = db.model('Life', LifeSchema);

module.exports = Life;