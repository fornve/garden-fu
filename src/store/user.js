export default {
  namespaced: true,
  state: {
    user: false
  },
  getters: {
    user: (state) => state.user
  },
  mutations: {
    setUser: (state, value) => {
      state.user = value
    }
  }
}
