<template>
  <div class="main">

    <HeanderTitle :name="name"/>
    <div class="continer">
      <Menu/>
      <router-view/>
    </div>
    <!-- <Footer/> -->
  </div>

</template>

<script>
import { mapMutations } from 'vuex'
import HeanderTitle from '@/components/header-title'
import Menu from '@/components/header-menu'
import Footer from '@/components/footer'
export default {
  name: 'Layout',
  components: {
    HeanderTitle,
    Menu,
    Footer
  },
  data () {
    return {
      name: '',
      ishow: true
    }
  },
  created () {
    let obj = localStorage.getItem('useInfo')
    let index = localStorage.getItem('menuItem')
    if (obj) {
      let name = JSON.parse(obj).name
      this.serUserInfo(name)
      this.name = name
    }
    if (index) {
      this.setActiveIndex(index)
    }
    if (index === '/personal') {
      this.setIshow(false)
    } else {
      this.setIshow(true)
    }
  },
  methods: {
    ...mapMutations(['serUserInfo', 'setActiveIndex', 'setIshow'])
  }
}
</script>

<style lang="stylus" scoped>
 .main
  width 1180px
  margin 0 auto
  .continer
    overflow hidden

</style>
