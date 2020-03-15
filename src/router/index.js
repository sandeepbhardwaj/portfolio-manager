import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Portfolio from '@/views/Portfolio.vue'
import Watchlist from '@/views/WatchList.vue'
import Smallcase from '@/views/Smallcase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  },
  {
    path: '/smallcase',
    name: 'Smallcase',
    component: Smallcase
  }

]

const router = new VueRouter({
  routes
})

export default router
