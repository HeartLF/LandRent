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
                <el-tab-pane label="耕地" name="耕地">
                    <Content :list="list"/>
                </el-tab-pane>
                <el-tab-pane label="林地" name="林地">
                    <Content :list="list"/>
                </el-tab-pane>
                <el-tab-pane label="农场" name="农场">
                    <Content :list="list"/>
                </el-tab-pane>
                <el-tab-pane label="农家乐" name="农家乐">
                    <Content :list="list"/>
                </el-tab-pane>
                <el-tab-pane label="宅基地" name="宅基地">
                    <Content :list="list"/>
                </el-tab-pane>
            </el-tabs>
          </div>
      </div>
      <div>
          <h3 style="margin-bottom:20px">近期热门</h3>
          <Content :list="recommendLandList"/>
      </div>
      <div>
          <h3 style="margin-bottom:20px">推荐好地</h3>
          <Content :list="hotlandList"/>
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
      activeName: '耕地',
      currentDate: new Date(),
      list: [],
      recommendLandList: [], // 推荐好地
      hotlandList: [], // 热销地
      FarmList: [], // 农场
      agritainmentList: [], // 农家乐
      homesteadList: [] // 宅基地
    }
  },
  created () {
    // this.$router.go(0)
    this.getLandByType(this.activeName)
    this.getRecommendLand()
    this.gethotLand()
  },
  methods: {
    handleClick (tab, event) {
      this.getLandByType(this.activeName)
    },
    async getLandByType (type) {
      const res = await this.$http.post('/land/getLandByType', {
        type
      })
      const {data} = res
      if (data && data.state === 1) {
        this.list = data.data
      }
    },
    async getRecommendLand () {
      const res = await this.$http.post('/land/recommendLand')
      const {data} = res
      if (data && data.state === 1) {
        this.recommendLandList = data.data
      }
    },
    async gethotLand () {
      const res = await this.$http.post('/land/hotLand')
      const {data} = res
      if (data && data.state === 1) {
        this.hotlandList = data.data
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
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
