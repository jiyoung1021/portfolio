import projectContainer from '@/views/container.vue'

// const container = () => import('@/views/project/container.vue')

export default {
  path: '/project',
  redirect: '/project/container',
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
