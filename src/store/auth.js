import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: localStorage.getItem('token') ? true : false
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
