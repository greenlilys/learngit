const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        host: '10.136.100.199',
        port: 8080,
        open: true,
        hot: true,
    },
});
