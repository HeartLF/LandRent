<template>
  <div class="main">
      <div class="continer">
        <div class="row">
          <div class="content">
              <ul>
                  <li>
                      <span><i class="el-icon-phone"></i>000-000-000</span>
                  </li>
                  <li>
                    <el-tooltip class="item" effect="light" placement="top-start">
                       <span><i class="el-icon-chat-dot-round"></i>官方微信</span>
                       <div slot="content">
                        <el-image
                        style="width: 228px; height: 159px"
                        src="https://statics.tuliu.com/web/images/fheader_img01.png?ver=VV20200120"
                        fits="fill"
                        ></el-image>
                       </div>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip class="item" effect="light" placement="top-start">
                       <span><i class="el-icon-chat-dot-round"></i>广告合作</span>
                       <div slot="content">
                        <el-image
                        style="width: 228px; height: 159px"
                        src="https://statics.tuliu.com/web/images/fheader_img01.png?ver=VV20200120"
                        fits="fill"
                        ></el-image>
                       </div>
                    </el-tooltip>
                  </li>
              </ul>
          </div>
          <div class="login">
            <span v-show="islogin" @click="login">请登录 |</span>
            <span v-show="isregister" @click="register">注册</span>
          </div>
        </div>
        <Search/>
      </div>

  </div>
</template>

<script>
import Menu from '../header-menu/index.vue'
import Search from '../header-search/index.vue'
export default {
  name: 'heanderTitle',
  components: {
    Menu,
    Search
  },
  data () {
    return {
      islogin: true,
      isregister: true
    }
  },
  methods: {
    login () {
      console.log(1111)
      this.$router.push({name: 'Login'})
    },
    register () {
      this.$router.push({name: 'Register'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  background #f8f8f8
  margin-bottom 18px
  .continer
    padding-left 15px
    padding-right 15px
    .row
      overflow hidden
      .content
        float left
        ul
          list-style-type: none
          padding: 0
          margin: 0
          li
            float left
            height 44px
            margin-right 25px
            line-height 44px
            position relative
            span
              color #000
              &:hover
                cursor pointer
              i
                color: #949494
                width 30px
                text-align center
                line-height 44px
                font-size 20px
      .login
        float right
        padding 10px 0px
        span
          font-size 16px
        &:hover
          cursor pointer
</style>>
