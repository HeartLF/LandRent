<template>
  <div class="main">
    <HeanderTitle/>
    <div class="continer">
      <Menu/>
      <router-view/>
    </div>

  </div>

</template>

<script>
import HeanderTitle from '@/components/header-title'
import Menu from '@/components/header-menu'
export default {
  name: 'Layout',
  components: {
    HeanderTitle,
    Menu
  }
}
</script>

<style lang="stylus" scoped>
 .main
  width 1180px
  margin 0 auto

</style>
