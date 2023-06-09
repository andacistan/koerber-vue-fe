import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/store'

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
