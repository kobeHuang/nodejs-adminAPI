const Merge = require('webpack-merge');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const baseConfig = require('./webpack.base.conf');


module.exports = Merge(baseConfig, {
    entry: [
        path.resolve(__dirname, '../app/index-static.js')
    ],
    output: {
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
              { from: /.*/, to: '/index.html' },
            ],
        },
        hot: true,
        port: 3030,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ["style-loader",'css-loader','postcss-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../app/static'),
                to: path.resolve(__dirname, '../public/client/static'),
                ignore: ['.*']
            }
        ]),
        //new Webpack.HotModuleReplacementPlugin(),
        new Webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('development')
          }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join('./','views/index-static.html'),
            inject: true
        })
    ]
});


