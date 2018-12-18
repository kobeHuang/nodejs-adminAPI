const Path = require('path');
const Merge = require('webpack-merge');
const Webpack = require('webpack');

const baseConfig = require('./webpack.base.conf');

module.exports = Merge(baseConfig, {
    entry: [
        //只替换了修改的代码，做到了页面的局部刷新
        //https://blog.csdn.net/huangpb123/article/details/78556652
        'react-hot-loader/patch',
        'webpack-hot-middleware',
        Path.resolve(__dirname, '../app/index.js')
    ],
    
    plugins:[
        //new Webpack.HotModuleReplacementPlugin(),
        new Webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('development')
          }
        })
    ]

});