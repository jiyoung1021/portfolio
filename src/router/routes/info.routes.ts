import infoContainer from '@/views/_container.vue'

const infoView = () => import('@/views/info/infoView.vue')

export default {
  path: '/info',
  redirect: '/info/_container',
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
