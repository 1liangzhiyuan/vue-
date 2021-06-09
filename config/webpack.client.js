// 引入path
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtract = require('mini-css-extract-plugin');
let OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
let { VueLoaderPlugin } = require('vue-loader');
// 配置
module.exports = {
    // 模式
    mode: 'production',
    // 解决问题
    resolve: {
        // 别名
        alias: {
            'vue$': 'vue/dist/vue.js',
            '@': path.join(process.cwd(), './home/src'),
            '@v': path.join(process.cwd(), './home/src/views'),
            '@c': path.join(process.cwd(), './home/src/components')
        },
        // 拓展名
        extensions: ['.vue', '.js']
    },
    // 入口文件
    entry: './home/src/entry.client.js',
    // 发布
    output: {
        // 文件名
        filename: '[name].js',
        // 发布到state目录下
        path: path.join(process.cwd(), './static/'),
        // 引入静态资源相对位置
        publicPath: '/static/'
    },
    // 模块
    module: {
        // 加载机
        rules: [
            // vue
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtract.loader,
                    'css-loader'
                ]
            },
            // less
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    MiniCssExtract.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            // scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // 插件
    plugins: [
        // 模板
        new HtmlWebpackPlugin({
            // 模板
            template: './home/public/index.html',
            // 发布
            filename: '../views/index.html',
            // 添加指纹
            hash: true,
            // html压缩配置
            minify: {
                collapseWhitespace: true,
                // 取消删除注释
                removeComments: false,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
              }
        }),
        // 拆分css
        new MiniCssExtract({
            filename: 'style.css'
        }),
        // 压缩css
        new OptimizeCssAssets(),
        // vue插件
        new VueLoaderPlugin()
    ],
    // 优化
    optimization: {
        // 拆分库文件
        splitChunks: {
            // 缓存分组
            cacheGroups: {
                lib: {
                    name: 'lib',
                    chunks: 'initial',
                    test: /node_modules/
                }
            }
        }
    }
}