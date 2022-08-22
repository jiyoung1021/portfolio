import noteContainer from '@/views/_container.vue'

// const container = () => import('@/views/note/_container.vue')

export default {
  path: '/note',
  redirect: '/note/_container',
  component: noteContainer,
  children: [
    // {
    //   path: 'container',
    //   component: container,
    //   meta: {
    //     title: '노트 메인'
    //   }
    // }
  ]
}
