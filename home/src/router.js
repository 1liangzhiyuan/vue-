// 引入库
import Vue from 'vue';
import Router from 'vue-router';
// 引入页面
import Home from '@v/Home';
import Detail from '@v/Detail';

// 安装
Vue.use(Router);

// 实例化
export default new Router({
    // 路由策略
    mode: 'history',
    // 路由规则
    routes: [
        { path: '/list/:page', component: () => import('@v/List') },
        { 
            path: '/detail/:id', 
            component: Detail ,
            // 子路由
            children: [
                {path: '/demo', component: {template: '<h2>demo page</h2>'}}
            ]
        },
        { path: '/home', component: Home },
    ]
})