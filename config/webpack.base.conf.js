const Path = require('path');

module.exports = {
    output: {
        filename: 'app.bundle.js',
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
                exclude:/node_modules/,
                include: [Path.resolve(__dirname, '../app')],
                loader: require.resolve('babel-loader')
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
    }
}