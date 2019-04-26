
/*
 *  图片上传
 *  @method post fromData
 *  @param file
 *  @param type
 */

import fs from 'fs';
import Path from 'path';

function checkFileType(type, extname){
    if(type == 'image'){
        return /.[png|jpg|gif]/.test(extname)
    }
}

function saveFile(reader, upStream){
    return new Promise( (resolve, reject) => {
        var stream = reader.pipe(upStream);

        stream.on('finish', function () {
            resolve(`http://当前服务器地址${data.name}`);
        });
    })
}

export default async(ctx, next) => {
    try{
        const files = ctx.request.files.file;
        let isAllow = true,
            uploads = [];
        /*if(type === undefined){
            ctx.sendError('100');
            return;
        }*/
        /*for(let file of files){
            const fliename = file.name;
            const extname = Path.extname(fliename);
            if(checkFileType(type,extname)){
                // 创建可读流
                const reader = fs.createReadStream(file.path);
                // 获取上传文件扩展名
                let filePath = path.join(__dirname, 'public/temp/') + `/${fliename}`;
                // 创建可写流
                const upStream = fs.createWriteStream(filePath);

                const serveLink = await saveFile(reader, upStream);

                uploads.push(serveLink);
            }else{
                isAllow = false;
                break;
            }
        }*/
        const filename = Path.basename(files.path);
        ctx.body = {
            code: "0",
            data: `http://localhost:3000/tmp/${filename}`
        }
    }catch(e) {
        ctx.sendError('1');
    }
}