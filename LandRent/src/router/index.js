import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout/index'
import Home from '@/components/home/index'
import Land from '@/components/land/index'
import House from '@/components/house/index'
import Register from '@/components/register/index'
import Login from '@/components/login/index'
import RetrievePass from '@/components/retrievePassword/index'
import MsgStep from '@/components/msgstep/index'
import Detail from '@/components/landDetail/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/home',
      component: Layout,
      children: [{
        path: '/home',
        name: 'Home',
        component: Home
      }, {
        path: '/land',
        name: 'Land',
        component: Land
      }, {
        path: '/land/:id',
        name: 'Detail',
        component: Detail
      }, {
        path: '/house',
        name: 'House',
        component: House
      }, {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/retrievePass',
        name: 'RetrievePass',
        component: RetrievePass
      }, {
        path: '/MsgStep',
        name: 'MsgStep',
        component: MsgStep
      }
      ]
    }
  ]
})
