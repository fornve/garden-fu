export default {
  namespaced: true,
  state: {
    teams: [],
  },
  getters: {
    teams: (state) => state.teams
  },
  mutations: {
    addTeam: (state, value) => {
      let index = state.teams.findIndex(x => x.id === value.id)
      if(index === -1) {
        state.teams.splice(state.teams.length, 0, value)
      } else {
        state.teams.splice(index, 1, value)
      }
    },
  }
}
