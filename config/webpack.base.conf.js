const Path = require('path');

module.exports = {
    output: {
        filename: '[name].bundle.[hash].js',
        path: Path.resolve(__dirname, '../public/client'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: [Path.resolve(__dirname, '../app')]
            },
            {
                test: /\.s?css$/,
                use: ["style-loader","css-loader","postcss-loader"]
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