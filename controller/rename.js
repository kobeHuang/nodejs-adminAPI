/*
 * 移动图片
 * @图片由临时文件夹移动到图库
 */

const fs = require('fs');
const Path = require('path');

module.exports = function(str) {
    const arr = str.split(',');
    arr.forEach(url => {
        if(url.indexOf('temp/') == -1) return;
        
        const basename = Path.basename(url);
        console.log(basename);
        const fromPath = Path.join(__dirname, `../public/temp/${basename}`);
        const toPath = Path.join(__dirname, `../public/upload/${basename}`);

        fs.rename(fromPath, toPath, function (err) {
            if (err) throw err;
            fs.stat(toPath, function (err, stats) {
                if (err) throw err;
                console.log('stats: ' + JSON.stringify(stats));
            })
        })
    });
}
