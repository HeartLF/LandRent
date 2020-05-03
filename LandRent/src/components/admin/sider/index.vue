<template>
  <div>
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
       background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height:100%"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>用户</span>
        </template>
        <el-menu-item index="/admin/person">
          <template slot="title">用户管理</template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item index="/admin/order">
          <template slot="title">全部订单</template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>土地管理</span>
        </template>
        <el-menu-item index="/admin/land">
          <template slot="title">土地审核</template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-money"></i>
          <span>销售数据</span>
        </template>
        <el-menu-item index="/admin/sales">
          <template slot="title">销售数据统计</template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>
