import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routerGuide from '@/router/routes/guide.routes'
import routerInfo from '@/router/routes/info.routes'

const routes: Array<RouteRecordRaw> = [
  routerGuide,
  routerInfo,
  {
    path: '/',
    component: () => import('@/views/_main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
