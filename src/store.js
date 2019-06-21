import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      error: ''
    }
  },
  mutations: {
    setError(state, payload) {
      state.data.error = payload
    }
  },
  actions: {
    prosesLogin({commit}, payload) {
      if ((payload.username == 'admin') && (payload.password == 'admin')) {
        const user = {
          username: payload.username,
          password: payload.password
        }
        const dataUser = JSON.stringify(user)
        localStorage.setItem("dataUser", dataUser)
        commit('setError', '')
      } else {
        commit('setError', 'username and password is wrong')
      }
    }
  }
})
