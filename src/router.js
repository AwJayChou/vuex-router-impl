import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

// 凡是Vue插件都要use一下
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        },
      ]
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/SlotsTest',
      name: 'SlotsTest',
      component: () => import(/* webpackChunkName: "slots" */ './components/slots/index.vue')
    },
    {
      path: '/Recursion',
      name: 'Recursion',
      component: () => import(/* webpackChunkName: "Recursion" */ './components/recursion/index.vue')
    },
    {
      path: '/KFormTest',
      name: 'KFormTest',
      component: () => import(/* webpackChunkName: "KFormTest" */ './components/form/index.vue')
    },
    {
      path: '/TreeTest',
      name: 'TreeTest',
      component: () => import(/* webpackChunkName: "TreeTest" */ './components/tree/index.vue')
    },
  ]
})
