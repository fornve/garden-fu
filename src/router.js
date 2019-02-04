import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:projectId/fields',
      name: 'fields',
      component: () => import(/* webpackChunkName: "fields" */ './components/fields/index.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:projectId/fields/:id',
      name: 'field view',
      component: () => import(/* webpackChunkName: "fields" */ './components/fields/view.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:projectId/works',
      name: 'works',
      component: () => import(/* webpackChunkName: "fields" */ './components/works/index.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "projects" */ './components/projects/index.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './components/profile/index.vue')
    },
    {
      path: '/:projectId/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './components/dashboard/index.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "about" */ './components/settings'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser;
/*
  if(currentUser) {
    if(!store.state.currentUser || store.state.currentUser.uid !== currentUser.uid) {
      // eslint-disable-next-line
      console.log('Setting up user');
      store.commit('setCurrentUser', currentUser)
      // eslint-disable-next-line
      console.log(store.state.currentUser);

      registerListeners(router)
      next();
    }
  }
*/
  if (requiresAuth && !currentUser) {
      next('/profile')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;
