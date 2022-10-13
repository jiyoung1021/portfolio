import guideContainer from '@/views/container.vue'

const main = () => import('@/views/guide/main.vue')
// ui
const typeScript = () => import('@/views/guide/ui-libs/typeScript.vue')

// uu
const uuLibsAccordion = () => import('@/views/guide/uu-libs/libsAccordion.vue')
const uuLibsButton = () => import('@/views/guide/uu-libs/libsButton.vue')
const uuLibsCheckbox = () => import('@/views/guide/uu-libs/libsCheckbox.vue')
const uuLibsCombobox = () => import('@/views/guide/uu-libs/libsCombobox.vue')
const uuLibsInput = () => import('@/views/guide/uu-libs/libsInput.vue')
const uuLibsProgress = () => import('@/views/guide/uu-libs/libsProgress.vue')
const uuLibsRadio = () => import('@/views/guide/uu-libs/libsRadio.vue')
const uuLibsTab = () => import('@/views/guide/uu-libs/libsTab.vue')
const uuLibsToast = () => import('@/views/guide/uu-libs/libsToast.vue')
const uuLibsTodo = () => import('@/views/guide/uu-libs/libsTodo.vue')
const uuLibsToggle = () => import('@/views/guide/uu-libs/libsToggle.vue')
const uuLibsTooltip = () => import('@/views/guide/uu-libs/libsTooltip.vue')

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
    // ui
    {
      path: '/ui-libs/typeScript',
      component: typeScript,
      meta: {
        title: 'typeScript'
      }
    },
    // uu
    {
      path: '/uu-libs/uuLibsButton',
      component: uuLibsButton,
      meta: {
        title: 'button'
      }
    },
    {
      path: '/uu-libs/uuLibsAccordion',
      component: uuLibsAccordion,
      meta: {
        title: 'accordion'
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
      path: '/uu-libs/uuLibsInput',
      component: uuLibsInput,
      meta: {
        title: 'input'
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
      path: '/uu-libs/uuLibsRadio',
      component: uuLibsRadio,
      meta: {
        title: 'radio'
      }
    },
    {
      path: '/uu-libs/uuLibsTab',
      component: uuLibsTab,
      meta: {
        title: 'tab'
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
      path: '/uu-libs/uuLibsTodo',
      component: uuLibsTodo,
      meta: {
        title: 'todo'
      }
    },
    {
      path: '/uu-libs/uuLibsToggle',
      component: uuLibsToggle,
      meta: {
        title: 'toggle'
      }
    },
    {
      path: '/uu-libs/uuLibsTooltip',
      component: uuLibsTooltip,
      meta: {
        title: 'tooltip'
      }
    }
  ]
}
