
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedDevice:null
  },
  mutations: {
    updateSelectedDevice (state,payload) {
      state.selectedDevice = payload
    }
  }
})