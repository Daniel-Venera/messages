import Vue from "vue"
import Vuex from "vuex"
import defaultMessages from './default-messages'
import { saveStatePlugin } from './utils'

Vue.use(Vuex)

const messages = JSON.parse(localStorage.getItem('messages')) || defaultMessages

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    messages
  },
  mutations: {
  },
  actions: {
  }
})
