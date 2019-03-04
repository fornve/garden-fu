import Vue from 'vue'
import Vuex from 'vuex'

import fields from './fields'
import plants from './plants'
import navigationDrawer from './navigation-drawer'
import team from './team'
import user from './user'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    fields,
    navigationDrawer,
    plants,
    team,
    user,
  }
})

export default store
