import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    alphabet: ''
  },
  mutations: {
    changeAlphabet (center, alphabet) {
      this.state.alphabet = alphabet
    }
  }
})

