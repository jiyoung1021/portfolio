import noteContainer from '@/views/container.vue'

// const container = () => import('@/views/note/container.vue')

export default {
  path: '/note',
  redirect: '/note/container',
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
