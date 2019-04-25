/*
 * 将助手类挂载到 app 
 */

const Path = require('path');
const fs = require('fs');

const Readdirectory = (path) => {
    let content = {};
     path = path.replace(/\\/g,'/');
    fs.readdirSync(path).forEach(filename => {
        let childPath = Path.join(path, filename);
        const stat = fs.statSync(childPath);

        let extname = Path.extname(filename);
        const fname = Path.basename(filename, extname);
        if(stat.isFile()) {
            let extname = Path.extname(filename);
            if(extname == '.js'){
                childPath = Path.join(process.cwd(), childPath);
                content[fname] = require(childPath);
            }
        }else{
            content[fname] = Readdirectory(childPath);
        }
    })
    return content;
}

export default (opts) => {
    let { app, mounts = [] } = opts;
    if(!app) {
        throw new Error("the app params is necessary!")
    }

    const appKeys = Object.keys(app);
    mounts.forEach((item) => {
        let { path, name } = item;
        if(appKeys.includes(name)){
            throw new Error(`the name of ${name} already exists!`)
        }

        app[name] = Readdirectory(path);
    });
}