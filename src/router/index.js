import Vue from 'vue'
import VueRouter from 'vue-router'


//解决Vue-Router升级导致的重定向问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    //路由懒加载
    component: () => import('../pages/index/index.vue'),
    beforeEach: (to, from, next) => {
      next()
    }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../pages/news/index.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    redirect: "/goods/item",
    component: () => import('../pages/goods/index.vue'),
    children: [
      {
        path: 'item',
        name: 'goodsItem',
        meta:{auth:true},
        component: () => import('../pages/goods/item.vue'),
      },
      {
        path: 'content',
        name: 'goodsContent',
        // meta:{auth:true},
        component: () => import('../pages/goods/content.vue'),
      },
      {
        path: 'evaluate',
        name: 'GoodsEvaluate',
        // meta:{auth:true},
        component: () => import('../pages/goods/evaluate.vue'),
      },
    ]
  },
  {
    path: '/params',
    name: 'params',
    // meta:{auth:true},
    component: () => import('../pages/params/index.vue'),
  },
  {
    path: '/news/details',
    name: 'newsDetails',
    meta:{auth:true},
    component: () => import('../pages/news/details.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // meta:{auth:true}, 
    component: () => import('../pages/login/index.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { auth: true },
    component: () => import('../pages/profile/index.vue'),
  },
  {
    path: '/cssify',
    name: 'cssify',
    // meta:{auth:true},
    component: () => import('../pages/goods/cssify.vue'),
  },
  {//用来做空页面跳转
    path: '/skip',
    name: 'skip',
    meta:{auth:true},
    component: () => import('../pages/skip/skip.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (Boolean(localStorage['isLogin'])) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
});


export default router;
