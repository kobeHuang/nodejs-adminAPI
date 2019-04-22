const Path = require('path');
const Merge = require('webpack-merge');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

module.exports = Merge(baseConfig, {
    devtool:'null',//注意，这能大大压缩我们的打包代码
    entry: {
        app: Path.resolve(__dirname, '../app/index.js')
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['isomorphic-style-loader',{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/client/*'],{
            root:Path.resolve(__dirname,'../')
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: Path.resolve(__dirname, '../app/static'),
                to: Path.resolve(__dirname, '../public/client/static'),
                ignore: ['.*']
            }
        ]),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: 'static/css/[name].[contenthash].css',
            allChunks: true
        }),
        new Webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});