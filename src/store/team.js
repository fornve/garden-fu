export default {
  namespaced: true,
  state: {
    team: false,
  },
  getters: {
    team: (state) => state.team,
  },
  mutations: {
    setTeam: (state, value) => {
      state.team = value
    }
  }
}
