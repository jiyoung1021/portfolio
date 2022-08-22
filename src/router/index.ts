import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import routerGuide from '@/router/routes/guide.routes'
import routerInfo from '@/router/routes/info.routes'
import routerNote from '@/router/routes/note.routes'
import routerProjict from '@/router/routes/project.routes'

const routes: Array<RouteRecordRaw> = [
  routerGuide,
  routerInfo,
  routerNote,
  routerProjict,
  {
    path: '/',
    component: () => import(/* webpackChunkName: "main" */ '@/views/_main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
