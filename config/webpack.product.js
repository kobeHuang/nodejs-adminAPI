const Path = require('path');
const Merge = require('webpack-merge');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.conf');

module.exports = Merge(baseConfig, {
    target: 'node',
    mode: "development",
    // devtool:'null',//注意，这能大大压缩我们的打包代码
    entry: {
        app: Path.resolve(__dirname, '../server.js')
    },
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, '../build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['isomorphic-style-loader',{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 8192,
                    outputPath: '../public/',
				    publicPath: '/'
                }
            },
        ]
    }
});