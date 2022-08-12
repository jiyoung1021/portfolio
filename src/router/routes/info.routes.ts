import infoContainer from '@/views/info/infoView.vue'

const infoView = () => import('@/views/info/infoView.vue')

export default {
  path: '/info',
  redirect: '/info/infoView',
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
