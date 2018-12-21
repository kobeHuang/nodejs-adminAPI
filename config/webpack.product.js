const Path = require('path');
const Merge = require('webpack-merge');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

module.exports = Merge(baseConfig, {
    entry: {
        app: Path.resolve(__dirname, '../app/index.js')
    },
    plugins: [
        new CleanWebpackPlugin(['public/client/*.*'],{
            root:Path.resolve(__dirname,'../')
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: 'static/css/[name].[contenthash].css',
            allChunks: true,
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: Path.resolve(__dirname, '../app/static'),
                to: Path.resolve(__dirname, '../public/client/static'),
                ignore: ['.*']
            }
        ]),
        new Webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});