const mongoose = require('mongoose');
const db = require('./db');

const CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});


let Counter = db.model('Counter', CounterSchema);

module.exports = Counter;
