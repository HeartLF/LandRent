<template>
  <el-row>
    <el-col :span="5" v-for="(item,index) in list" :key="index"  :offset="1" style="margin-bottom:20px">
        <el-card shadow="always" :body-style="{ padding: '0px' }" >
            <div @click="handleClick(item)">
                <img :src="'http://123.57.237.81'+item.images[0]" class="image">
                <div class="text" >
                    <h4>{{item.title }}</h4>
                    <div class="bottom clearfix">
                    <p class="txt-price">
                        <span><span class="price">{{item.price}}元</span>/亩/年</span>
                        <span class="fr">{{item.area}}亩</span>
                    </p>
                    <p class="time">
                        <span>
                            <i class="el-icon-pie-chart"></i>
                            {{item.years}}年
                        </span>
                        <span class="fr">
                            <i class="el-icon-location-information"></i>
                            {{item.region}}
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
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    handleClick (item) {
      this.$router.push({
        name: 'Detail',
        params: {
          id: item.id
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
