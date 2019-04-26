import mongoose from 'mongoose';
import db from './db';

let LifeSchema = new mongoose.Schema({
    title: String,
    imgs: String,
    order: Number
},{
    timestamps: true
});



const Life = db.model('Life', LifeSchema);

export default Life;