
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfoName: '123'
  },
  mutations: {
    serUserInfo (state, name) {
      console.log(name)
      // let obj = localStorage.getItem('userInfo')
      // console.log(localStorage.getItem('userInfo'))
      // if (obj) {
      state.userInfoName = name
      //   console.log(state)
      // } else {
      //   state.userInfo = ''
      // }
    }
  }
})

export default store
