export default {
  namespaced: true,
  state: {
    fields: []
  },
  getters: {
    fields: (state) => state.fields,
    getField: (state, id) => {
      let index = state.fields.findIndex(x => x.id === id)

      if(index > -1) {
        return state.fields[index]
      }

      return {
        id: id,
        metadata: {
          createdAt: new Date()
        }
      }
    }
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
  }
}
