import * as actions from './actions'

const mutations = {
  setProjects(state, val) {
    state.projects = val
  },
}

const state = {
  projects: [],
}

export default {
  state,
  actions,
  mutations
}