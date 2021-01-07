/**
 * @Author: Caven
 * @Date: 2020-12-24 21:05:19
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
