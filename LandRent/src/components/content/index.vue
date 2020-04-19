<template>
  <el-row>
    <el-col :span="5" v-for="o in 8" :key="o"  :offset="1" style="margin-bottom:20px">
        <el-card shadow="always" :body-style="{ padding: '0px' }" >
            <div @click="handleClick">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585549142139&di=3ca8e810724f070cf48798a7c41009ac&imgtype=0&src=http%3A%2F%2Fwww.xnz360.com%2Flauploadfile%2F2017%2F0216%2F20170216173131650.jpg" class="image">
                <div class="text" >
                    <h4>宜春丰城市1123亩水田出租</h4>
                    <div class="bottom clearfix">
                    <p class="txt-price">
                        <span><span class="price">320元</span>/亩/年</span>
                        <span class="fr">1123亩</span>
                    </p>
                    <p class="time">
                        <span>
                            <i class="el-icon-pie-chart"></i>
                            10年
                        </span>
                        <span class="fr">
                            <i class="el-icon-location-information"></i>
                            江西/宜春/丰城市
                        </span>
                    </p>
                    </div>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Content',
  methods: {
    handleClick () {
      console.log(111)
      this.$router.push({
        name: 'Detail',
        params: {
          id: '1'
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-card:hover
    cursor pointer
    border-color #ff9f00
    transform scale(1.1)
.text
    padding 15px 20px
    h4
        height: 20px;
        font-size: 16px;
        color: #333;
        margin-bottom: 8px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        line-height: 20px;
    .txt-price
        height 24px
        line-height 24px
        font-size 12px
        color #999
        .price
            font-size: 16px!important
            color #ff9f00
    .time
        margin-top 10px
        height 24px
        line-height 24px
        font-size 12px
        color #999

.bottom
    margin-top 13px
    line-height 12px
.price
    font-size 16px

.image
    width: 100%
    display: block

.clearfix:before,
.clearfix:after
    display: table;
    content: ""

.clearfix:after
    clear: both
.fl
    float left
.fr
    float right

</style>
