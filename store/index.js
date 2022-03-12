export const state = () => ({
  globals: {},
  user: {
    searchHistory: []
  }
})

export const actions = {
  nuxtServerInit(context) {
    return this.$repository.globals.show()
      .then((response) => {
        context.commit('SET_GLOBALS', response.data);
      })
  },

  addSearchHistory(context, value) {
    context.commit('ADD_SEARCH_HISTORY', value)
  }
}

export const mutations = {
  SET_GLOBALS(state, value) {
    state.globals = value
  },

  ADD_SEARCH_HISTORY(state, value) {
    if (value && !state.user.searchHistory.includes(value)) {
      state.user.searchHistory.unshift(value)

      if (state.user.searchHistory.length >= 6) {
        state.user.searchHistory.pop()
      }
    }
  }
}

// export const getters = {
//     getGlobals(state) { return state.globals }
// }
