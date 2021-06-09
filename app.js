// 引入express
let express = require('express');
let ejs = require('ejs');
// 引入fs和path
let fs = require('fs');
let path = require('path');
// vue在服务器端渲染的模块
let { createBundleRenderer } = require('vue-server-renderer');
// 引入json文件
let ssr = require('./server/bundle.json');
// console.log(A);

// 创建渲染器
let renderer = createBundleRenderer(ssr, {
    // 模板
    template: fs.readFileSync(path.join(process.cwd(), './views/index.html'), 'utf-8')
})
// 应用
let app = express();
// 拓展名
app.engine('.html', ejs.__express);

// 静态化
app.use('/static/', express.static('./static/'))

// 路由
app.get('*', (req, res) => {
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    // 渲染应用程序
    renderer
        .renderToString({
            // 向应用程序中，传递数据
            url: req.url,
            title: 'this is title',
            meta: `<meta name="keywords" content="这是网站的主要内容">
            <meta name="description" content="这是一段描述信息">`
        })
        // 监听结果
        .then(html => res.end(html))
        // 监听失败
        .catch(err => {
            // 判断错误码
            if (err.code === 404) {
                res.status(404).end(err.msg)
            } else {
                res.status(500).end('服务器错误')
            }
        })
})

// 端口号
app.listen(3000)
