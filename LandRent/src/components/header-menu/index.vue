<template>
  <el-menu :default-active="activeIndex" router active-text-color="#409EFF" text-color="#262626" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/home">首页</el-menu-item>
  <el-menu-item index="/land">土地</el-menu-item>
  <el-menu-item index="/house">房屋</el-menu-item>
</el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/home'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>
