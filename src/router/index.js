// import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Welcome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../components/Timeline.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
