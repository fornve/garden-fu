import { teamsCollection } from '@/firebase'
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
  },
  actions: {
    getTeam({ commit }, teamId) {
      teamsCollection
        .doc(teamId)
        .onSnapshot(doc => {
          commit('setTeam', {
            id: doc.id,
            metadata: doc.data()
          })
        })
    }
  }
}
