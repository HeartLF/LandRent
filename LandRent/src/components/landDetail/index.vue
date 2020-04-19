<template>
  <div>
    <div class="box" style="overflow:hidden">
        <div class="item fl">
            <el-carousel trigger="click" height="345px">
                <el-carousel-item v-for="item in 4" :key="item">
                <el-image
                    src="https://img2s.tuliu.com/lands/2020/04/13/5e2207d0-3f6c-0126-51ff-5777dbf49cfc.jpg?x-oss-process=style/center_big"
                    fit="fit"></el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="fl" style="margin-left:20px;overflow:hidden">
            <h3 style="padding:10px 10px;margin:20px">湖南常德460亩优质水田出租</h3>
            <div class="price">
                <span>价格：</span>
                <span style="color:#ff9f00">400元/亩</span>
            </div>
            <div class="info fl">
                <p class="fl">
                    <span style="color:#999">土地用途</span>
                    <span>耕地|水田</span>
                </p>
                <p class="fl">
                    <span style="color:#999">流转年限</span>
                    <span>10年</span>
                </p>
                <p class="fl">
                    <span style="color:#999" >土地面积</span>
                    <span>460 亩</span>
                </p>
                <p class="fl">
                    <span style="color:#999">土地地点</span>
                    <span>湖南/常德/澧县</span>
                </p>
                <p class="fl">
                    <el-button style="widthL170px;height:44px;background-color: #ff4600;color:#fff">立即签约</el-button>
                </p>
            </div>
            <div class="fl">
                <p >
                    <span style="color:#999">联系人</span>
                    <span>崔女士</span>
                </p>
                <p >
                    <span style="color:#999">电话</span>
                    <span style="color:#ff9f00">152****5522</span>
                    <span class="msg">查看</span>
                </p>
            </div>
        </div>
    </div>
    <el-divider/>
    <div>
        <h3>土地详情</h3>
        <h5 style="margin:10px 10px">卖家有话说</h5>
        <p style="margin:10px 10px;padding:10px 10px">非常优质的土地，去年弄的土地平整，三通一平，间距一公里，交通也非常便利，适合多种种植。欢迎广大老板前来考察</p>
    </div>
    <div>
        <h3>优质地源推荐</h3>
        <Content style="margin-top:10px"/>
    </div>
  </div>
</template>

<script>
import Content from '@/components/content'
export default {
  components: {
    Content
  }
}
</script>

<style lang="stylus" scoped>
>>>.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

>>>.el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

>>>.el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.box
    .item
        width 460px
        height 380px
        overflow hidden
        margin  20px
    .price
        background: #F5F5F5
        padding 10px
        line-height 24px
        margin 10px
    .info
        width 400px
        // background: #F5F5F5
    p
        width 200px
        height 30px
        line-height 30px
        padding 10px 10px
        span
            margin-right 10px
            color #444
    .msg
        display inline-block
        width: 46px;
        height: 20px;
        border: 1px solid #FF9F00;
        border-radius: 10px;
        text-align: center;
        font-size: 14px;
        color: #FF9F00;
        line-height: 20px;
        &:hover
            cursor pointer
.fl
    float left
</style>
