import * as actions from './actions'

const getters = {
  getFields: state => {
    return state.fields;
  },
  getAllFields: state => {
    return state.all_fields;
  },
}

const mutations = {
  setFields(state, val) {
    state.fields = val
  },
  setAllFields(state, val) {
    state.all_fields = val
  },
}

const state = {
  fields: [],
  all_fields: []
}

export default {
  state,
  getters,
  actions,
  mutations
}