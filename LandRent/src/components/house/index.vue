<template>
  <div>
    <div style="height:100%;position: absolute;
    left: 170px;
    right: 0px;">
    <el-row class="tac" style="height:100%">
      <el-col :span="4" style="height:100%">
      <el-menu
        :defaultOpeneds="defaultOpeneds"
        router
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height:100%">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>我的土地</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/personal/publishLand">已发布土地</el-menu-item>
            <el-menu-item index="/personal/pendingLand">待审核土地</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>我的订单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/personal/allOrder">全部订单</el-menu-item>
            <el-menu-item index="/personal/pendingOrder">待付款订单</el-menu-item>
            <el-menu-item index="/personal/payOrder">已付款订单</el-menu-item>
            <el-menu-item index="/personal/cancelOrder">已取消订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      </el-col>
      <el-col :span="19" style="height:100%;overflow-y:auto">
        <div style="margin-left:20px;padding:20px 20px">
           <router-view/>
        </div>
      </el-col>
    </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'House',
  data () {
    return {
      defaultOpeneds: ['1', '/personal/publishLand']
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-menu-vertical-demo{
  height: 100%;
}
>>>.el-aside {
display: block;
position: relative;
overflow-y: scroll;
background-color: #324157 !important;
}
</style>
