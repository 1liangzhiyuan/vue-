// 引入vue实例化对象
import app from './main';
// 引入路由
import router from './router';
// 暴露接口
export default ({ url }) => new Promise((resovle, reject) => {
    // 监听解析结果
    router.onReady(() => {
        if (router.getMatchedComponents().length) {
            // 有匹配的页面，可以正常渲染
            resovle(app)
        } else {
            // 没有与路由匹配的页面，不能正常渲染
            reject({ code: 404, msg: '找不到该页面' })
        }
    })
    // 加入地址
    router.push(url)
});
