import { fieldsCollection } from '@/firebase'
export default {
  namespaced: true,
  state: {
    fields: []
  },
  getters: {
    fields: (state) => state.fields
  },
  mutations: {
    addField: (state, item) => {
      let index = state.fields.findIndex(x => x.id === item.id)

      if(index === -1) {
        state.fields.splice(state.fields.length, 0, item)
      } else {
        if(item.deleted) {
          state.fields.splice(index, 1)
        } else {
          state.fields.splice(index, 1, item)
        }
      }
    }
  },
  actions: {
    getTeamFields: ({ commit }, teamId) => {
      fieldsCollection
        .where('teamId', '==', teamId)
        .orderBy('createdAt', 'desc')
        .onSnapshot(querySnapshot => {
          querySnapshot.forEach(doc => {
            commit('addField', {
              id: doc.id,
              metadata: doc.data()
            })
          })
        })
      }
  }
}
