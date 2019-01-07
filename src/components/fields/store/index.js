import * as actions from './actions'

const getters = {
  getFields: state => {
    return state.fields;
  }
}

const mutations = {
  setFields(state, val) {
    state.fields = val
  }
}

const state = {
  fields: [],
  fields_test: true
}

export default {
  state,
  getters,
  actions,
  mutations
}