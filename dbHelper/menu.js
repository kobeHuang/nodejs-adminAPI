import Mongodb from 'mongodb';
import menuModel from '../model/menu';

const ObjectId = Mongodb.ObjectId;


class Menu{
    static async findMenu({ pageNo, pageSize }) {
        let result = null,
            total = 0;
        const start = (pageNo - 1) * pageSize;
        total = await menuModel.find().count();
        result = await menuModel.find().limit(pageSize).skip(start).sort({order: -1}) || [];
        
        return {
            total,
            result
        }
    }

    static async insertMenu({ _id, name, icon, order }) {
        let result = null;
        const imgArr = icon.split(',');

        let images = imgArr.map(img => {
            return img.replace('tmp/', 'upload/')
        });

        if(_id){
            result = await menuModel.updateOne({_id: ObjectId(_id)}, {$set: {name, icon: images.join(','), order}}, {upsert: true});
        }else{
            let menu = new menuModel({
                name, 
                icon: images.join(','), 
                order
            })
            result = await menu.save();      
        }

        return result;
    }

    static async delMenu({ ids }) {
        let idArr = ids.split(','),
            objIds = [];
        idArr.forEach(id => {
            objIds.push(ObjectId(id));
        });
        const result = await menuModel.deleteMany({_id: {$in: objIds}});
        return result;
    }
}

export default Menu;