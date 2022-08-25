import guideContainer from '@/views/_container.vue'

const main = () => import('@/views/guide/_main.vue')
const uuLibsComboBox = () => import('@/views/guide/uu-libs/libsComboBox.vue')
const uuLibsTooltip = () => import('@/views/guide/uu-libs/libsTooltip.vue')
const uuLibsProgress = () => import('@/views/guide/uu-libs/libsProgress.vue')
const uuLibsToast = () => import('@/views/guide/uu-libs/libsToast.vue')

export default {
  path: '/guide',
  redirect: '/guide',
  component: guideContainer,
  children: [
    {
      path: 'main',
      component: main,
      meta: {
        title: '가이드 메인'
      }
    },
    {
      path: '/uu-libs/uuLibsComboBox',
      component: uuLibsComboBox,
      meta: {
        title: 'combobox'
      }
    },
    {
      path: '/uu-libs/uuLibsTooltip',
      component: uuLibsTooltip,
      meta: {
        title: 'tooltip'
      }
    },
    {
      path: '/uu-libs/uuLibsProgress',
      component: uuLibsProgress,
      meta: {
        title: 'progress'
      }
    },
    {
      path: '/uu-libs/uuLibsToast',
      component: uuLibsToast,
      meta: {
        title: 'toast'
      }
    }
  ]
}
