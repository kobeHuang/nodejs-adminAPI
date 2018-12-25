const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: Path.resolve(__dirname, '../public/client'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude:/node_modules/,
                include: Path.resolve(__dirname, "app"),
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: 'css-loader'
                },{
                    loader:'postcss-loader',
                }]
            },
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                include: [Path.resolve(__dirname, '../app')],
                loaders: ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    }
}