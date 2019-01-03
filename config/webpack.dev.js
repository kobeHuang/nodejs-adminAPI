const Path = require('path');
const Merge = require('webpack-merge');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

module.exports = Merge(baseConfig, {
    entry: [
        //只替换了修改的代码，做到了页面的局部刷新
        //https://blog.csdn.net/huangpb123/article/details/78556652
        //'react-hot-loader/patch',
        //'webpack-hot-middleware/client?reload=true',
        Path.resolve(__dirname, '../app/server.js')
    ],
    output: {
        publicPath: '/client/'
    },  
    plugins:[
        new CopyWebpackPlugin([
            {
                from: Path.resolve(__dirname, '../app/static'),
                to: Path.resolve(__dirname, '../public/client/static'),
                ignore: ['.*']
            }
        ]),
        //new Webpack.HotModuleReplacementPlugin(),
        new Webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('development')
          }
        })
    ]

});