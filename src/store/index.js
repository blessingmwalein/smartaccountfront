import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from 'vue-router';
Vue.use(Vuex)
const baseUrl = "http://192.168.1.121:8000/api"
export default new Vuex.Store({
  state: {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    errorMessage: ""
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },

    errorMessage(state) {
      return state.errorMessage
    },

    authUser(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, payload) {
      localStorage.setItem('user', JSON.stringify(payload.user));
      localStorage.setItem('token', payload.access_token);
      state.user = payload;
      this.isAuthenticated = true;
      location.href = '/'
    }
  },
  actions: {
    async login({ commit, state }, payload) {
      try {
        var response = await axios.post(`${baseUrl}/login`, payload)
        commit('setUser', response.data)
      } catch (error) {
        console.log(error);
        state.errorMessage = error.response?.data?.message
      }
    }
  },
  modules: {
  }
})
