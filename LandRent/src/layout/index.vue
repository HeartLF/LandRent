<template>
  <div class="main">
    <HeanderTitle :name="name"/>
    <div class="continer">
      <Menu/>
      <router-view/>
    </div>

  </div>

</template>

<script>
import { mapMutations } from 'vuex'
import HeanderTitle from '@/components/header-title'
import Menu from '@/components/header-menu'
export default {
  name: 'Layout',
  components: {
    HeanderTitle,
    Menu
  },
  data () {
    return {
      name: ''
    }
  },
  created () {
    let obj = localStorage.getItem('useInfo')
    if (obj) {
      let name = JSON.parse(obj).name

      this.serUserInfo(name)
      this.name = name
    }
  },
  methods: {
    ...mapMutations(['serUserInfo'])
  }
}
</script>

<style lang="stylus" scoped>
 .main
  width 1180px
  margin 0 auto

</style>
