export default [
  {
    path: '/:team/rotation',
    name: 'rotation.index',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/components/rotation/index.vue'),
  },
  {
    path: '/:team/rotation/:id',
    name: 'rotation.edit',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/components/rotation/index.vue'),
  },
]
