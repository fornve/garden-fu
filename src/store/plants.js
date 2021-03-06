export default {
  namespaced: true,
  state: {
    plants: []
  },
  getters: {
    fields: (state) => state.plants
  },
  mutations: {
    addPlant: (state, item) => {
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
  }
}
