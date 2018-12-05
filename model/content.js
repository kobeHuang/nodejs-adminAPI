const mongoose = require('mongoose');
const db = require('./db');

const ContentSchema = new mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});


let Content = db.model('Content', ContentSchema);

module.exports = Content;