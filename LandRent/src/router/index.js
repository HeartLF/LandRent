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
import contract from '@/components/allContract/index'
import contractItem from '@/components/contractDetail/index'
import contractItem1 from '@/components/contractDetail/contract1'
import contractItem2 from '@/components/contractDetail/contract2'
import contractItem3 from '@/components/contractDetail/contract3'
import contractItem4 from '@/components/contractDetail/contract4'
import contractItem5 from '@/components/contractDetail/contract5'
import contractItem6 from '@/components/contractDetail/contract6'
import contractItem7 from '@/components/contractDetail/contract7'
import contractItem8 from '@/components/contractDetail/contract8'
import contractItem9 from '@/components/contractDetail/contract9'
import contractItem10 from '@/components/contractDetail/contract10'
import contractItem11 from '@/components/contractDetail/contract11'
import contractItem12 from '@/components/contractDetail/contract12'
import contractItem13 from '@/components/contractDetail/contract13'
import contractItem14 from '@/components/contractDetail/contract14'
import contractItem15 from '@/components/contractDetail/contract15'
import contractItem16 from '@/components/contractDetail/contract16'
import contractItem17 from '@/components/contractDetail/contract17'
import contractItem18 from '@/components/contractDetail/contract18'
import contractItem19 from '@/components/contractDetail/contract19'
import contractItem20 from '@/components/contractDetail/contract20'
import contractItem21 from '@/components/contractDetail/contract21'
import contractItem22 from '@/components/contractDetail/contract22'
import contractItem23 from '@/components/contractDetail/contract23'
import contractItem24 from '@/components/contractDetail/contract24'
import contractItem25 from '@/components/contractDetail/contract25'
import contractItem26 from '@/components/contractDetail/contract26'

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
    }, {
      path: '/contract',
      name: 'contract',
      component: contract
    }, {
      path: '/contractItem1',
      name: 'contractItem1',
      component: contractItem1
    }, {
      path: '/contractItem2',
      name: 'contractItem2',
      component: contractItem2
    }, {
      path: '/contractItem3',
      name: 'contractItem3',
      component: contractItem3
    }, {
      path: '/contractItem',
      name: 'contractItem',
      component: contractItem
    }, {
      path: '/contractItem4',
      name: 'contractItem4',
      component: contractItem4
    }, {
      path: '/contractItem5',
      name: 'contractItem5',
      component: contractItem5
    }, {
      path: '/contractItem6',
      name: 'contractItem6',
      component: contractItem6
    }, {
      path: '/contractItem7',
      name: 'contractItem7',
      component: contractItem7
    }, {
      path: '/contractItem8',
      name: 'contractItem8',
      component: contractItem8
    }, {
      path: '/contractItem9',
      name: 'contractItem9',
      component: contractItem9
    }, {
      path: '/contractItem10',
      name: 'contractItem10',
      component: contractItem10
    }, {
      path: '/contractItem11',
      name: 'contractItem11',
      component: contractItem11
    }, {
      path: '/contractItem12',
      name: 'contractItem12',
      component: contractItem12
    }, {
      path: '/contractItem13',
      name: 'contractItem13',
      component: contractItem13
    }, {
      path: '/contractItem14',
      name: 'contractItem14',
      component: contractItem14
    }, {
      path: '/contractItem15',
      name: 'contractItem15',
      component: contractItem15
    }, {
      path: '/contractItem16',
      name: 'contractItem16',
      component: contractItem16
    }, {
      path: '/contractItem17',
      name: 'contractItem17',
      component: contractItem17
    }, {
      path: '/contractItem18',
      name: 'contractItem18',
      component: contractItem18
    }, {
      path: '/contractItem19',
      name: 'contractItem19',
      component: contractItem19
    }, {
      path: '/contractItem20',
      name: 'contractItem20',
      component: contractItem20
    }, {
      path: '/contractItem21',
      name: 'contractItem21',
      component: contractItem21
    }, {
      path: '/contractItem22',
      name: 'contractItem22',
      component: contractItem22
    }, {
      path: '/contractItem23',
      name: 'contractItem23',
      component: contractItem23
    }, {
      path: '/contractItem24',
      name: 'contractItem24',
      component: contractItem24
    }, {
      path: '/contractItem25',
      name: 'contractItem25',
      component: contractItem25
    }, {
      path: '/contractItem26',
      name: 'contractItem26',
      component: contractItem26
    }, {
      path: '/contractItem',
      name: 'contractItem',
      component: contractItem
    }]
  }, {
    path: '/applay',
    name: 'applay',
    component: applay
  }]
})
