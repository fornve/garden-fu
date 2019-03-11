import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import RotationRoutes from './components/rotation/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...RotationRoutes,
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
      }
    },
    {
      path: '/:team',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './components/dashboard/index.vue'),
      meta: {
        requiresAuth: true,
        title: 'Dashboard'
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "about" */ './components/settings'),
      meta: {
        requiresAuth: true,
        title: 'Settings'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = 'Garden-fu '+ to.meta.title;
  next()
})

export default router;
