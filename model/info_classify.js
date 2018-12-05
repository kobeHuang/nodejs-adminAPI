const mongoose = require('mongoose');
const db = require('./db');

let ClassifySchema = new mongoose.Schema({
    name: String,
    icon: String,
    status: Boolean
},{
    timestamps: true
});


let InfoClassify = db.model('InfoClassify', ClassifySchema);

module.exports = InfoClassify;