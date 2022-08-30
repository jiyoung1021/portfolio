import infoContainer from '@/views/container.vue'

const infoView = () => import('@/views/info/info.vue')

export default {
  path: '/info',
  redirect: '/info/container',
  component: infoContainer,
  children: [
    {
      path: 'infoView',
      component: infoView,
      meta: {
        title: '소개'
      }
    }
  ]
}
