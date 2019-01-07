import Vue from 'vue'
import Vuex from 'vuex'
const uuid = require('uuid');
const firebase = require('../firebase.js')

import fields from '../components/fields/store'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  actions: {
    fetchUserProfile({ commit, state }) {
        firebase.usersCollection.doc(state.currentUser.uid).get().then(res => {
            commit('setUserProfile', res.data())
        }).catch(() => {
            //console.log(err)
        })
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
    fields
  }
})

export default store
