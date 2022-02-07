export const state = () => ({
  globals: {}
})

export const actions = {
  nuxtServerInit(context) {
    return this.$repository.globals.show()
      .then((response) => {
        // console.log(response.data)
        context.commit('SET_GLOBALS', response.data);
      })
  }
}

export const mutations = {
  SET_GLOBALS(state, value){
    state.globals = value
  }
}

// export const getters = {
//     getGlobals(state) { return state.globals }
// }
