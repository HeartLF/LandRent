<template>
  <el-menu :default-active="activeIndex" router active-text-color="#409EFF" text-color="#262626" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/home">首页</el-menu-item>
  <el-menu-item index="/land">土地</el-menu-item>
  <el-menu-item index="/personal">个人中心</el-menu-item>
</el-menu>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      // activeIndex: '/home'
    }
  },
  computed: {
    ...mapState(['activeIndex'])
  },
  methods: {
    ...mapMutations(['setActiveIndex', 'setIshow']),
    handleSelect (key, keyPath) {
      localStorage.setItem('menuItem', key)
      this.setActiveIndex(key)
      if (key === '/personal') {
        this.setIshow(false)
      } else {
        this.setIshow(true)
      }
    }
  }
}
</script>

<style>

</style>
