import Vue from 'vue'
import Vuex from 'vuex'
const uuid = require('uuid');
const { firebase, auth } = require('../firebase.js')

import fields from '../components/fields/store'
import projects from '../components/projects/store'
import registerListeners from "../services/listeners/register"
import navigationDrawer from './navigation-drawer'
Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  actions: {
    retrieveUser({ commit }, router) {
      auth.onAuthStateChanged((user) => {
        commit('setUserProfile', user)
        registerListeners(router)
      });
    },
    worksNew(work) {
      work.createdAt = new Date();
      firebase.db.collection('works').doc(uuid()).set(work).then(() => {
      }).catch(() => {
          //console.log(err)
      })
    }
  },
  getters: {
    getCurrentProject: state => {
      return state.currentProject;
    },
    getCurrentUser: state => {
      return state.currentUser;
    }
  },
  mutations: {
    setCurrentProject(state, val) {
        state.currentProject = val
    },
    setCurrentUser(state, val) {
        state.currentUser = val
    },
    setUserProfile(state, val) {
        state.userProfile = val
    },
    setWorks(state, val) {
        state.works = val
    },
  },
  state: {
    currentProject: null,
    currentUser: null,
    userProfile: {},
    works: [],
  },
  modules: {
    fields,
    projects,
    navigationDrawer
  }
})

export default store
