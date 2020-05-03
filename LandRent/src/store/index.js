
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfoName: '',
    activeIndex: '/home',
    ishow: true
  },
  mutations: {
    serUserInfo (state, name) {
      state.userInfoName = name
    },
    setActiveIndex (state, index) {
      state.activeIndex = index
    },
    setIshow (state, ishow) {
      state.ishow = ishow
    }
  }
})

export default store
