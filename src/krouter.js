import Vue from 'vue'
import VueRouter from './kvue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
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