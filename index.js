// require('./ignore.js')();
require('@babel/register')
// require('@babel/polyfill')
require('css-modules-require-hook/preset');

require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif'],
    limit: 8192,
    name: 'static/img/[name].[hash:7].[ext]'
})

require('./server')