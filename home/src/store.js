// 引入库
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

// 安装
Vue.use(Vuex);

// 实例化
export default new Store({
    // 数据
    state: {
        num: 0
    },
    // 同步消息
    mutations: {
        // 增加数字
        addNum(state, num) {
            // 改变数据
            state.num += +num;
        }
    }
})