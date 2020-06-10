// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './store/index'
import Vuex from 'vuex'
import watermark from '@/assets/watermark.js'
Vue.prototype.$watermark = watermark
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
Vue.use(ElementUI)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app', // 根节点
  router, // 路由
  store, // vuex
  components: { App }, // 根组件
  template: '<App/>'
})
