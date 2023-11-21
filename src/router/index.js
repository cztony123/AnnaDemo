import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../pages/index/index.vue'
import NewsPage from '../pages/news/index.vue'
import GoodsPage from '../pages/goods/index.vue'
import GoodsItemPage from '../pages/goods/item.vue'
import GoodsContentPage from '../pages/goods/content.vue'
import GoodsEvaluatePage from '../pages/goods/evaluate.vue'
import GoodsParamsPage from '../pages/params/index.vue'
import GoodsDetailsPage from '../pages/news/details.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component:IndexPage,
  },
  {
    path: '/news',
    name: 'news',
    component:NewsPage,
  },
  {
    path: '/goods',
    name: 'goods',
    redirect:"/goods/item",
    component:GoodsPage,
    children:[
      {
        path: 'item',
        name: 'goodsItem',
        component:GoodsItemPage,
      },
      {
        path: 'content',
        name: 'goodsContent',
        component:GoodsContentPage,
      },
      {
        path: 'evaluate',
        name: 'GoodsEvaluate',
        component:GoodsEvaluatePage,
      },
    ]
  },
  {
    path: '/params',
    name: 'params',
    component:GoodsParamsPage,
  },
  {
    path: '/news/details',
    name: 'newsDetails',
    component:GoodsDetailsPage,
  },
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
