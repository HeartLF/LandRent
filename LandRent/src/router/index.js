import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout/index'
import Home from '@/components/home/index'
import Land from '@/components/land/index'
import personal from '@/components/house/index'
import Register from '@/components/register/index'
import Login from '@/components/login/index'
import RetrievePass from '@/components/retrievePassword/index'
import MsgStep from '@/components/msgstep/index'
import Detail from '@/components/landDetail/index'
import PayOrder from '@/components/order/payOrder'
import allOrder from '@/components/order/allOrder'
import cancelOrder from '@/components/order/cancellationofOrder'
import pendingOrder from '@/components/order/pendingOrder'
import pendingLand from '@/components/landMsg/pendingLand'
import publishLand from '@/components/landMsg/publishLand'
import applay from '@/components/applay/index'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/land',
      name: 'Land',
      component: Land
    },
    {
      path: '/land/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/personal',
      name: 'personal',
      redirect: '/personal/publishLand',
      component: personal,
      children: [{
        path: '/personal/PayOrder',
        name: 'PayOrder',
        component: PayOrder
      },
      {
        path: '/personal/allOrder',
        name: 'allOrder',
        component: allOrder
      },
      {
        path: '/personal/pendingOrder',
        name: 'pendingOrder',
        component: pendingOrder
      },
      {
        path: '/personal/cancelOrder',
        name: 'cancelOrder',
        component: cancelOrder
      },
      {
        path: '/personal/pendingLand',
        name: 'pendingLand',
        component: pendingLand
      },
      {
        path: '/personal/publishLand',
        name: 'publishLand',
        component: publishLand
      }
      ]
    },
    {
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
    },
    {
      path: '/MsgStep',
      name: 'MsgStep',
      component: MsgStep
    }]
  }, {
    path: '/applay',
    name: 'applay',
    component: applay
  }]
})
