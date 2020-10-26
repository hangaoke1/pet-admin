import store from 'store'
const state = {
  store: store.get('STORE') || null
}

const mutations = {
  SET_STORE: (state, info) => {
    store.set('STORE', info)
    state.store = info
  }
}

const actions = {
  setCurrentStore({ commit }, info) {
    commit('SET_STORE', info)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
