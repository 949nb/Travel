import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../page/home/home.vue')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('../page/list/list.vue')
    }
  ]
})