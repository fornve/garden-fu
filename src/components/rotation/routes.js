export default [
  {
    path: '/:project/rotation',
    name: 'rotation.index',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/components/rotation/index.vue'),
  },
  {
    path: '/:project/rotation/:id',
    name: 'rotation.edit',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/components/rotation/index.vue'),
  },
]
