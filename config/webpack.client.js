const Path = require('path');
const Merge = require('webpack-merge');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

module.exports = Merge(baseConfig, {
    mode: 'development',
    entry: [
        //只替换了修改的代码，做到了页面的局部刷新
        Path.resolve(__dirname, '../app/index.js')
    ],
    output: {
        filename: 'app.bundle.js',
        path: Path.resolve(__dirname, '../public/client'),
        publicPath: '/client/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                // include: [Path.resolve(__dirname, '../app')],
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.css$/,
                use: ['style-loader',{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 8192,
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['public/client/*'],{
            root:Path.resolve(__dirname,'../')
        }),
        new CopyWebpackPlugin([
            {
                from: Path.resolve(__dirname, '../app/static'),
                to: Path.resolve(__dirname, '../public/client/static'),
                ignore: ['.*']
            }
        ])
    ]

});