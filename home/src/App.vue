<template>
<div id="app">
    <h1>app part -- {{msg}}</h1>
    <button @click="addNum">{{$store.state.num}}</button>
    <!-- 渲染路由 -->
    <hr>
    <router-view></router-view>
</div>
</template>
<style lang="scss" scoped>
h1 {
    color: red;
}
button {
    font-size: 30px;
}
</style>
<script>
export default {
    // 数据
    data() {
        return {
            msg: 'ickt'
        }
    },
    // 方法
    methods: {
        // 发布增加数字的消息
        addNum() {
            this.$store.commit('addNum', 1)
        }
    },
    created() {
        
    }
}
</script>