import Vue from 'vue'
import Vuex from 'vuex'
const firebase = require('../firebase.js')

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
    fieldsNew({ commit, state }, field ) {
      console.log(field)
      console.log(  firebase.db.collection('fields'))
      firebase.db.collection('fields').doc(field.name).set(field).then(res => {
          console.log(res)
      }).catch(() => {
          //console.log(err)
      })
    }
  },
  mutations: {
    setCurrentUser(state, val) {
        state.currentUser = val
    },
    setFields(state, val) {
        state.fields = val
    },
    setUserProfile(state, val) {
        state.userProfile = val
    },

  },
  state: {
    currentUser: null,
    userProfile: {},
		fields: []
  }
})

export default store