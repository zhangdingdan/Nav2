import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Transport from '../views/Transport.vue'
import Security from '../views/Security.vue'
import Service from '../views/Service.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Service',
    name: 'Service',
    component: Service
  },
  {
    path: '/Security',
    name: 'Security',
    component: Security
  },
  {
    path: '/Tansport',
    name: 'Transport',
    component: Transport
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
