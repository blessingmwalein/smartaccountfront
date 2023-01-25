import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from 'vue-router';
Vue.use(Vuex)
const baseUrl = process.env.VUE_APP_BASE_URL;
export default new Vuex.Store({
  state: {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    errorMessage: "",
    baseUrl: baseUrl,
    products: [],
    productsSold: []
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
    },
    baseURL(state) {
      return state.baseUrl
    },
    products(state) {
      return state.products
    },
    productsSold(state) {
      return state.productsSold
    }
  },
  mutations: {
    setUser(state, payload) {
      localStorage.setItem('user', JSON.stringify(payload.user));
      localStorage.setItem('token', payload.access_token);
      state.user = payload;
      this.isAuthenticated = true;
      location.href = '/'
    },
    setProducts(state, payload) {
      console.log(payload)
      state.products = payload
    },
    setProductsSold(state, payload) {
      state.products = payload
    }
  },
  actions: {
    async login({ commit, state }, payload) {
      try {
        var response = await axios.post(`${baseUrl}api/login`, payload)
        commit('setUser', response.data)
      } catch (error) {
        console.log(error);
        state.errorMessage = error.response?.data?.message
      }
    },

    async getStoreProducts({ commit }, payload) {
      return await axios.get(`${baseUrl}api/store/stock?id=${payload.id}`)
    },

    async getStoreProductsSold({ commit, state }, payload) {
      return await axios.get(`${baseUrl}api/store/sold?id=${payload.id}`)
    }


  },
  modules: {
  }
})
