import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Info',
    component: Info
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/work.vue')
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/program.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
