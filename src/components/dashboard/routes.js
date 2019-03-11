export default [
  {
    path: '/:team',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ './index.vue'),
  },
  {
    path: '/:team/field/:field',
    name: 'dashboard.field',
    component: () => import(/* webpackChunkName: "dashboard" */ './index.vue'),
  },
]
