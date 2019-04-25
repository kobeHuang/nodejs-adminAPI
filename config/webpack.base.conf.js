const Path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                // include: [Path.resolve(__dirname, '../app')],
                loader: require.resolve('babel-loader')
            }
        ]
    }
}