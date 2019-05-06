import mongoose from 'mongoose';
import db from'./db';

let ClassifySchema = new mongoose.Schema({
    name: String,
    icon: String,
    status: Boolean
},{
    timestamps: true
});


let InfoClassify = db.model('InfoClassify', ClassifySchema);

export default InfoClassify;