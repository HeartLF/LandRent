<template>
  <div class="footer" v-show="ishow">
   <div style="width:1180px;margin:0 auto">
         <el-row>
     <el-col :span="5" style="padding-left:30px;margin-left:30px"><div >
      <p>特色功能</p>
       <ul>
        <li @click="tolandMsg">发布土地</li>
        <li @click="toland">我要找地</li>
        <li @click="tocontract">土地合同</li>
        <li>农业保险</li>
        <li>农业贷款</li>
       </ul>
      </div></el-col>
      <el-col :span="5" style="padding-left:30px;margin-left:30px"><div>
      <p>关于我们</p>
       <ul>
        <li>公司介绍</li>
        <li>联系我们</li>
        <li>广告服务</li>
       </ul></div></el-col>
     <el-col :span="5" style="padding-left:30px;margin-left:30px"><div >
      <p>帮助中心</p>
       <ul>
        <li>网站公告</li>
        <li @click="toland">我要找地</li>
        <li @click="tolandMsg">我要卖地</li>
        <li @click="toLogin">网站注册登录</li>
       </ul></div></el-col>

     <el-col :span="5" style="padding-left:30px;margin-left:30px"><div >
      <p>联系我们</p>
       <ul>
        <li>市场合作：000-000-000</li>
        <li>商务合作：111-111-111</li>
        <li>企业邮箱：111@163.com</li>
       </ul></div></el-col>
</el-row>
   </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      // ishow: true
    }
  },
  computed: {
    ...mapState(['ishow'])
  },
  created () {
    if (this.$route.name === 'publishLand') {
      this.ishow = false
    }
  },
  methods: {
    tolandMsg () {
      this.$router.push({
        name: 'MsgStep'
      })
    },
    toland () {
      this.$router.push({
        name: 'Land'
      })
    },
    toLogin () {
      this.$router.push({
        name: 'Login'
      })
    },
    tocontract () {
      this.$router.push({
        name: 'contract'
      })
    }
  }
}
</script>

<style scoped>
.footer{
 width: 100%;
    position: absolute;
    left: 0px;
    border-top: solid 1px rgb(238, 238, 238);
    background: rgb(248, 248, 248)
}

  p{
   width: 120px;
    font-size: 16px;
    color: rgb(38, 38, 38);
    margin-bottom: 10px;
    font-weight: 700;
    padding: 10px 10px;
  }
  li:hover{
   cursor: pointer;
   color: rgb(255, 159, 0);
  }
  ul{
   list-style: none;
  }
  li{
   padding: 10px 10px;
   color: rgb(136, 136, 136);
  }
</style>
