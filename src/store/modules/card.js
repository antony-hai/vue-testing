
// initial state
const state = {
  all: [],
  count: 0,
}

// getters
const getters = {}

// actions
const actions = {
  setCountAsync ({ commit }) {
    setTimeout(() => {
      commit('setCountAsync', Math.floor(Math.random() * 10 + 1 ))
    }, 500)
  }
}

// mutations
const mutations = {
  setCountAsync (state, number) {
    state.count = number
  },

  addProductCount (state) {
    state.count++ 
  },
  decreaseProductCont (state) {
    const count = state.count
    state.count = count === 0 ? 0 : (count - 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}