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
            <h3 style="padding:10px 10px;margin:20px">{{list.title}}</h3>
            <div class="price">
                <span>价格：</span>
                <span style="color:#ff9f00">{{list.price}}元/亩</span>
            </div>
            <div class="info fl">
                <p class="fl">
                    <span style="color:#999">土地用途</span>
                    <span>{{list.type}}</span>
                </p>
                <p class="fl">
                    <span style="color:#999">流转年限</span>
                    <span>{{list.years}}年</span>
                </p>
                <p class="fl">
                    <span style="color:#999" >土地面积</span>
                    <span>{{list.area}} 亩</span>
                </p>
                <p class="fl">
                    <span style="color:#999">土地地点</span>
                    <span>{{`${list.region}${list.address}`}}</span>
                </p>
                <p class="fl" style="margin-top:30px">
                    <el-button @click="handClick" style="widthL170px;height:44px;background-color: #ff4600;color:#fff">立即签约</el-button>
                </p>
            </div>
            <div class="fl">
                <p >
                    <span style="color:#999">联系人</span>
                    <span>{{list.person}}</span>
                </p>
                <p >
                    <span style="color:#999">电话</span>
                    <span v-if="isshow" style="color:#ff9f00">{{list.Newphone}}</span>
                    <span v-else style="color:#ff9f00">{{list.phone}}</span>
                    <span class="msg" @click="check">查看</span>
                </p>
            </div>
        </div>
    </div>
    <el-divider/>
    <div>
        <h3>土地详情</h3>
        <h5 style="margin:10px 10px">卖家有话说</h5>
        <p style="margin:10px 10px;padding:10px 10px">{{list.description}}</p>
    </div>
    <div>
        <h3>优质地源推荐</h3>
        <Content style="margin-top:10px"/>
    </div>
    <ContractDialog :item="list"  :showModel.sync="show"/>
  </div>
</template>

<script>
import Content from '@/components/content'
import ContractDialog from '@/components/contract'
export default {
  components: {
    Content,
    ContractDialog
  },
  data () {
    return {
      value1: '',
      show: false,
      list: [],
      isshow: true
    }
  },
  created () {
    this.getLandInfo(this.$route.params.id)
  },
  methods: {
    handClick () {
      this.show = true
    },
    async getLandInfo (landId) {
      const res = await this.$http.post('land/getLandById', {
        landId
      })
      const {data} = res
      if (data && data.state === 1) {
        this.list = data.data
        let {phone} = this.list
        let mobile = String(phone)
        let reg = /^(\d{3})\d{4}(\d{4})$/
        this.list.Newphone = mobile.replace(reg, '$1****$2')
      }
    },
    check () {
      this.isshow = false
    }
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
