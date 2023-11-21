import Vue from 'vue';
//引入路由
import Router from 'vue-router';
// import IndexPage from './components/pages/index/index.vue';
// import NewsPage from './components/pages/index/news/index.vue';
// import GoodsPage from './components/pages/index/goods/index.vue';
// import GoodsItemPage from './components/pages/index/goods/item.vue';
// import GoodsContenrPage from './components/pages/index/goods/content.vue';
// import GoodsReviewPage from './components/pages/index/goods/review.vue';


Vue.use(Router);   //装载路由

//实例化路由
let router=new Router({
    mode:"hash",   //1、hash哈希:有#号；2、history历史：没有#号
    routes:[
        {
            path:"/",
            name:"index",
            //路由懒加载
            component:()=>import('./components/pages/index/index.vue')
        },
        {
            path:"/news",
            name:"news",
            component:()=>import('./components/pages/index/news/index.vue')
        },
        {
            path:"/goods",
            name:"goods",
            redirect:"/goods/item",
            component:()=>import('./pages/goods/index.vue'),
                children:[
                    {
                        path:"item",
                        name:"goodsItem",
                        component:()=>import('./pages/goods/item.vue')
                    },
                    {
                        path:"content",
                        name:"goodsContent",
                        component:()=>import('./pages/goods/content.vue')
                    },
                    {
                        path:"review",
                        name:"goodsReview",
                        component:()=>import('./pages/goods/review.vue')
                    },
                ]
        },
        {
            path:"/params",
            name:"params",
            component:()=>import('./pages/params/index.vue') 
    } ,
    {
        path:"/news/details",
        name:"newsDetails",
        component:()=>import('./pages/news/details.vue') 
    }
        
    ]
});
export default router;