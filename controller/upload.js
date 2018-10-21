
/*
 *  图片上传
 *  @method post fromData
 *  @param file
 *  @param type
 */

const fs = require('fs');
const Path = require('path');

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

module.exports = async(ctx, next) => {
    try{
        const files = ctx.requset.files.file,
              type = ctx.requset.body.type;
        let isAllow = true,
            uploads = [];
        if(type === undefined){
            ctx.sendError('100');
            return;
        }
        for(let file of files){
            const fliename = file.name;
            const extname = Path.extname(fliename);
            if(checkFileType(type,extname)){
                // 创建可读流
                const reader = fs.createReadStream(file.path);
                // 获取上传文件扩展名
                let filePath = path.join(__dirname, 'public/upload/') + `/${fliename}`;
                // 创建可写流
                const upStream = fs.createWriteStream(filePath);

                const serveLink = await saveFile(reader, upStream);

                uploads.push(serveLink);
            }else{
                isAllow = false;
                break;
            }
        }

        if(isAllow){
            ctx.body = {
                code: "0",
                data: uploads.join(',')
            }
        }else{
            ctx.sendError('106');
        }
    }catch(e) {
        ctx.sendError('1');
    }
}