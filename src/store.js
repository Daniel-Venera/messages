import Vue from "vue"
import Vuex from "vuex"
import defaultMessages from './default-messages'
import { saveStatePlugin, uuid } from './utils'

Vue.use(Vuex)

const messages = JSON.parse(localStorage.getItem('messages')) || defaultMessages

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    messages
  },
  mutations: {
    CREATE_MESSAGE(state, { body }) {
      state.messages.push({
        ...body,
        id: uuid(),
      })
    },
  },
})
