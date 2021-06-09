// 引入path
let path = require('path');
let { VueLoaderPlugin } = require('vue-loader');
// 引入vue发布文件
let VueServerRenderer = require('vue-server-renderer/server-plugin');
// 配置
module.exports = {
    // 模式
    mode: 'development',
    // ========== 给服务器端发布
    target: 'node',
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
    // ========= 入口文件
    entry: './home/src/entry.server.js',
    // 发布
    output: {
        // 文件名
        filename: '[name].js',
        // 发布到state目录下
        path: process.cwd(),
        // 将ES Module规范编译成CommonJS规范
        libraryTarget: 'commonjs2'
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
                    'css-loader'
                ]
            },
            // less
            {
                test: /\.less$/,
                use: [
                    'css-loader',
                    'less-loader'
                ]
            },
            // scss
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // 插件
    plugins: [
        // vue插件
        new VueLoaderPlugin(),
        // 发布文件
        new VueServerRenderer({
            filename: './server/bundle.json'
        })
    ]
}