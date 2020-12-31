const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV === 'development';
console.log(process.env.NODE_ENV);
module.exports = {
    entry: {
        main: ['./src/js/head.js', './src/js/foot.js'],
        index: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: devMode ? 'js/[name].js' : 'js/[name]_[chunkhash:8].js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/, // 可以打包后缀为sass/scss/css的文件
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
                            // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
                            publicPath: './',
                        },
                    },
                    // 'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 这里的配置和webpackOptions.output中的配置相似
            // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash:8].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash:8].css',
        }),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            title: 'test parameter',
            inject: 'body',
            hash: false,
        }),
    ],
};
