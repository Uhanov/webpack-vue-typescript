import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import Inner from '../pages/Inner'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/inner',
      name: 'inner',
      component: Inner
    },
    { path: '*', redirect: '/' }
  ]
})

export default router
