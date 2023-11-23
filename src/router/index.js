import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    //路由懒加载
    component:()=>import('../pages/index/index.vue'),
    beforeEach:(to,from,next)=>{ 
      next()  
    } 
  },
  {
    path: '/news',
    name: 'news',
    component:()=>import('../pages/news/index.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    // meta:{auth:true},
    redirect:"/goods/item",
    component:()=>import('../pages/goods/index.vue'),
    children:[
      {
        path: 'item',
        name: 'goodsItem',
        // meta:{auth:true},
        component:()=>import('../pages/goods/item.vue'),
      },
      {
        path: 'content',
        name: 'goodsContent',
        // meta:{auth:true},
        component:()=>import('../pages/goods/content.vue'),
      },
      {
        path: 'evaluate',
        name: 'GoodsEvaluate',
        // meta:{auth:true},
        component:()=>import('../pages/goods/evaluate.vue'),
      },
    ]
  },
  {
    path: '/params',
    name: 'params',
    // meta:{auth:true},
    component:()=>import('../pages/params/index.vue'),
  },
  {
    path: '/news/details',
    name: 'newsDetails',
    // meta:{auth:true},
    component:()=>import('../pages/news/details.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta:{auth:true},
    component:()=>import('../pages/login/index.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{auth:true},
    component:()=>import('../pages/profile/index.vue'),
  },
  {
    path: '/cssify',
    name: 'cssify',
    // meta:{auth:true},
    component:()=>import('../pages/goods/cssify.vue'),
  },
  {
    path: '/skip',
    name: 'skip',
    // meta:{auth:true},
    component:()=>import('../pages/skip/skip.vue'),
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
});

router.beforeEach((to,from,next)=>{
  console.log(to.meta.auth);
  if(to.meta.auth){
    console.log(Boolean(localStorage['isLogin']));
      if(Boolean(localStorage['isLogin'])){
          return next()
      }else{
        return next('/login')
    }
  } else {
      next()
  }
});


export default router
