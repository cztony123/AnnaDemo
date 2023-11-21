import Vue from 'vue';
//引入路由
import Router from 'vue-router';
import IndexPage from './components/pages/index/index.vue'
import NewsPage from './components/pages/index/news/index.vue'

Vue.use(Router);   //装载路由

//实例化路由
let router=new Router({
    mode:"hash",   //1、hash哈希:有#号；2、history历史：没有#号
    routes:[
        {
            path:"/",
            name:"index",
            component:IndexPage
        },
        {
            path:"/news",
            name:"news",
            component:NewsPage
        }
    ]
});
export default router;