const actions = {
  toggle: ({ commit }) => {
    commit('toggle')
  }
}

const mutations = {
  toggle: (state) => {
    state.drawer = !state.drawer
  }
}

const state = {
  drawer: false
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}