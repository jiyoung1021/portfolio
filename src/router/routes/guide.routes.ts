import guideContainer from '@/views/guide/_container.vue'

const uuLibsTooltip = () => import('@/views/guide/uu-libs/libsTooltip.vue')

export default {
  path: '/guide',
  redirect: '/guide/_container',
  component: guideContainer,
  children: [
    { component: uuLibsTooltip, path: '/uu-libs/uuLibsTooltip' }
  ]
}
