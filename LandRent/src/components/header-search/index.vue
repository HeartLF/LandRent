<template>
  <div>
      <div class="main">
        <div class="continer fl">
                <el-image
                    style="width: 200px; height: 100px"
                    src="http://www.diyiziti.com/Res/Images//Temp/330/db316af9c0b1419b82e5c57736979405.PNG"
                    fit="fill">
                </el-image>
        </div>
        <div class="search fr">
            <div class="search_item">
                <div class="fl">
                    <el-input placeholder="请输入内容" v-model="input3">
                    <el-button slot="append" @click="search">搜索</el-button>
                    </el-input>
                </div>
                <div class="btn fl">
                    <el-button type="primary" @click="sendMsg">发布土地信息</el-button>
                </div>
            </div>

        </div>
      </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  },
  methods: {
    ...mapMutations(['setActiveIndex']),
    sendMsg () {
      this.$router.push({name: 'MsgStep'})
    },
    search () {
      this.$router.push({
        name: 'Land',
        query: {
          key: this.input3
        }
      })
      localStorage.setItem('menuItem', '/land')
      this.setActiveIndex('/land')
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
    overflow hidden
    .continer
        margin 10px 0px 10px 0px
    .search
        line-height 126px
        margin-right 50px
        .el-select
            width 100px
        .search_item
            overflow hidden
            >>>.input-with-select .el-input-group__prepend
                background-color: #fff
        .btn
            margin-left 10px
.fl
    float left
.fr
    float right
</style>
