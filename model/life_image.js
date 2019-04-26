import mongoose from 'mongoose';
import db from './db';

let LifeImageSchema = new mongoose.Schema({
    topic: String,
    img: String
},{
    timestamps: true
});


const LifeImage = db.model('LifeImage', LifeImageSchema);

export default LifeImage;