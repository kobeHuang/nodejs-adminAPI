import mongoose from 'mongoose';
import db from './db';

const ContentSchema = new mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});


let Content = db.model('Content', ContentSchema);

export default Content;