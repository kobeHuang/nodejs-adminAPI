const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    output: {
        filename: '[name].bundle.[hash].js',
        path: Path.resolve(__dirname, '../public/app')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: [Path.join(__dirname, 'app')]
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader"]
                })
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
    },
    postcss: function () {
        return [require('postcss-salad')];
    }
}