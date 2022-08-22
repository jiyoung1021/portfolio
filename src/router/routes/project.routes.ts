import projectContainer from '@/views/_container.vue'

// const container = () => import('@/views/project/_container.vue')

export default {
  path: '/project',
  redirect: '/project/_container',
  component: projectContainer,
  children: [
    // {
    //   path: 'container',
    //   component: container,
    //   meta: {
    //     title: '프로젝트 메인'
    //   }
    // }
  ]
}
