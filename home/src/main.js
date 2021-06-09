// 引入vue
import Vue from 'vue';
// 引入应用程序
import App from './App';
// 引入store
import store from './store';
// 引入路由
import router from './router';

// 实例化
export default new Vue({
    // 注册store
    store,
    // 注册路由
    router,
    // 渲染
    render: h => h(App)
})