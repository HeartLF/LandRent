<template>
<div>
    <el-carousel :interval="4000"  indicator-position="outside" height="350px">
        <el-carousel-item v-for="item in images" :key="item">
            <el-image :src="item" style="width: 100%; height: 100%" fit="fill"></el-image>
        </el-carousel-item>
  </el-carousel>
  <div class="main">
      <div class="continer">
          <div class="hotType">
            <h3 class="fl">热门分类</h3>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="耕地" name="first">
                    <Content/>
                </el-tab-pane>
                <el-tab-pane label="林地" name="second">
                    <Content/>
                </el-tab-pane>
                <el-tab-pane label="农场" name="third">
                    <Content/>
                </el-tab-pane>
                <el-tab-pane label="农家乐" name="fourth">
                    <Content/>
                </el-tab-pane>
                <el-tab-pane label="宅基地" name="five">
                    <Content/>
                </el-tab-pane>
            </el-tabs>
          </div>
      </div>
      <div>
          <h3 style="margin-bottom:20px">近期热门带看</h3>
          <Content/>
      </div>
      <div>
          <h3 style="margin-bottom:20px">推荐好地</h3>
          <Content/>
      </div>
  </div>
</div>
</template>

<script>
import Content from '@/components/content'
export default {
  name: 'Home',
  components: {
    Content
  },
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585549142157&di=836acc3be82be8d3bf7514e6e0779a47&imgtype=0&src=http%3A%2F%2Fp0.ssl.cdn.btime.com%2Ft01f3389cca6499783a.jpg%3Fsize%3D505x325',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585549142155&di=68ff5d953e015f9ff65d67f02b86c0f5&imgtype=0&src=http%3A%2F%2Fp1.ssl.cdn.btime.com%2Ft014312f2e3d2537241.jpg%3Fsize%3D592x376',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585549142155&di=76c718c867f4ff4e639e1e1e41ce3346&imgtype=0&src=http%3A%2F%2Fwww.tobaccochina.com%2Fuploadfiles%2Fpic%2F20130619092715737A.jpg'
      ],
      activeName: 'first',
      currentDate: new Date()
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="stylus">
.el-carousel__item h3
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
.el-carousel__item:nth-child(2n)
    background-color: #99a9bf;
.el-carousel__item:nth-child(2n+1)
    background-color: #d3dce6
h3
    padding-left 10px
    height 40px
    line-height 40px
    margin-right 50px
    border-left: solid 4px #ff9f00;
.fl
    float left
</style>
