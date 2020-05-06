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
                    <el-tooltip  effect="light" placement="top-start">
                       <span><i class="el-icon-chat-dot-round"></i>官方微信</span>
                       <div slot="content">
                        <el-image
                        style="width: 176px; height: 230px"
                        src="https://qr.api.cli.im/newqr/create?data=%E4%BA%91%E7%89%87%E5%9C%B0&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=2&logourl=http%3A%2F%2Fstatic.clewm.net%2Fcli%2Fimages%2Fbeautify%2Flogo%2Ficon2.png&size=200&bgimg=&logoshape=no&text=%E4%BA%91%E7%89%87%E5%9C%B0&fontsize=30&fontcolor=%2300a650&fontfamily=simsun.ttc&incolor=&outcolor=&qrcode_eyes=&background=&wper=0&hper=0&tper=0&lper=0&eye_use_fore=1&qrpad=10&kid=cliim&key=74ddfc9cb36b4f4b7716121707677029"
                        fits="fill"
                        ></el-image>
                       </div>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip  effect="light" placement="top-start">
                       <span><i class="el-icon-chat-dot-round"></i>广告合作</span>
                       <div slot="content">
                        <el-image
                        style="width: 176px; height: 230px"
                        src="https://qr.api.cli.im/newqr/create?data=%E4%BA%91%E7%89%87%E5%9C%B0&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=2&logourl=http%3A%2F%2Fstatic.clewm.net%2Fcli%2Fimages%2Fbeautify%2Flogo%2Ficon2.png&size=200&bgimg=&logoshape=no&text=%E4%BA%91%E7%89%87%E5%9C%B0&fontsize=30&fontcolor=%2300a650&fontfamily=simsun.ttc&incolor=&outcolor=&qrcode_eyes=&background=&wper=0&hper=0&tper=0&lper=0&eye_use_fore=1&qrpad=10&kid=cliim&key=74ddfc9cb36b4f4b7716121707677029"
                        fits="fill"
                        ></el-image>
                       </div>
                    </el-tooltip>
                  </li>
              </ul>
          </div>
          <div class="login">
            <span  @click="login">{{userInfoName?userInfoName:'请登录 |'}}</span>
            <span v-if="userInfoName"  @click="logout" style="padding-left:10px;color:red">退出登录</span>
            <span v-else @click="register">注册</span>
          </div>
        </div>
        <Search/>
      </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Menu from '../header-menu/index.vue'
import Search from '../header-search/index.vue'
export default {
  name: 'heanderTitle',
  components: {
    Menu,
    Search
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState(['userInfoName']),
    useInfo () {
      let obj = localStorage.getItem('useInfo')
      if (obj) {
        return JSON.parse(obj).name
      }
      return ''
    }
  },
  data () {
    return {
      islogin: true,
      isregister: true
    }
  },
  created () {
    // this.serUserInfo(JSON.parse(localStorage.getItem('userInfo')))
  },
  methods: {
    ...mapMutations(['serUserInfo']),
    login () {
      this.$router.push({name: 'Login'})
    },
    register () {
      this.$router.push({name: 'Register'})
    },
    logout () {
      this.$http.post('/user/logout').then(res => {
        if (res.data.state === 1) {
          localStorage.setItem('useInfo', '')
          this.serUserInfo('')
          this.useInfo = ''
          this.$message.success(res.data.message)
          this.$router.go(0)
        } else {
          this.$message.success(res.data.message)
        }
      })
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
</style>
