import guideContainer from '@/views/container.vue'

const main = () => import('@/views/guide/main.vue')
const uuLibsCheckbox = () => import('@/views/guide/uu-libs/libsCheckbox.vue')
const uuLibsCombobox = () => import('@/views/guide/uu-libs/libsCombobox.vue')
const uuLibsTooltip = () => import('@/views/guide/uu-libs/libsTooltip.vue')
const uuLibsProgress = () => import('@/views/guide/uu-libs/libsProgress.vue')
const uuLibsToast = () => import('@/views/guide/uu-libs/libsToast.vue')
const uuLibsToggle = () => import('@/views/guide/uu-libs/libsToggle.vue')

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
      path: '/uu-libs/uuLibsCheckbox',
      component: uuLibsCheckbox,
      meta: {
        title: 'checkbox'
      }
    },
    {
      path: '/uu-libs/uuLibsCombobox',
      component: uuLibsCombobox,
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
    },
    {
      path: '/uu-libs/uuLibsToggle',
      component: uuLibsToggle,
      meta: {
        title: 'toggle'
      }
    }
  ]
}
