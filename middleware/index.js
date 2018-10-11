const Path = require('path');

const mount = require('./mi-mount');

module.exports = (app) => {
    mount({
        app,
        mounts: [
            {
                path:Path.join(__dirname, '../controller'),
                name: 'controller'
            }
        ]
    })
}