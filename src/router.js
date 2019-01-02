import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import firebase from 'firebase'
import store from './store'
import registerListeners from './services/listeners/register'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },
    {
      path: '/fields',
      name: 'fields',
      component: () => import(/* webpackChunkName: "fields" */ './components/fields/index.vue')
    },
    {
      path: '/fields/:id',
      name: 'field view',
      component: () => import(/* webpackChunkName: "fields" */ './components/fields/view.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import(/* webpackChunkName: "fields" */ './components/works/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './components/login/index.vue')
    },
    {
      path: '/dashboard',
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
    const currentUser = firebase.auth().currentUser

    if(currentUser) {
      if(!store.state.currentUser || store.state.currentUser.uid !== currentUser.uid) {
        console.log('Setting up user');
        store.commit('setCurrentUser', currentUser)
        console.log(store.state.currentUser);
        registerListeners(firebase)
      }
    }

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;
