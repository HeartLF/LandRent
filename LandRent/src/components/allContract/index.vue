<template>
 <div>
   <div class="msg">土地合同</div>
  <el-tabs v-model="activeName1" @tab-click="handleClick">
    <el-tab-pane label="土地承包合同" name="first">
     <div class="demo-image" >
     <div class="block item"  v-for="fit in fitFirt" :key="fit.title" @click="topath(fit)">
      <div class="read" >点击阅读</div>
      <el-image
       style="width: 114px;
       height: 140px;
       margin: 10px 27px"
        :src="fit.url"
        fit="fill"></el-image>
        <p class="title" style="">{{fit.title}}</p>
     </div>
     </div>
    </el-tab-pane>
    <el-tab-pane label="土地转包合同" name="second">
          <div class="demo-image" style="overflow:hidden">
     <div class="block item"  v-for="fit in fitSecond" :key="fit.title" @click="topath(fit)">
      <div class="read">点击阅读</div>
      <el-image
        style="width: 114px;
       height: 140px;
       margin: 10px 27px"
        :src="fit.url"
        fit="fill"></el-image>
        <p class="title" style="">{{fit.title}}</p>
     </div>
     </div>
    </el-tab-pane>
  </el-tabs>
    <el-tabs v-model="activeName2" @tab-click="handleClick">
    <el-tab-pane label="土地出让合同" name="first">
     <div class="demo-image" style="overflow:hidden">
     <div class="block item"  v-for="fit in fitsThrid" :key="fit.title" @click="topath(fit)">
      <div class="read">点击阅读</div>
      <el-image
        style="width: 114px;
       height: 140px;
       margin: 10px 27px"
        :src="fit.url"
        fit="fill"></el-image>
        <p class="title" style="">{{fit.title}}</p>
     </div>
     </div>
    </el-tab-pane>
    <el-tab-pane label="土地抵押合同" name="second">
          <div class="demo-image" style="overflow:hidden">
     <div class="block item"  v-for="fit in fitsFouth" :key="fit.title" @click="topath(fit)">
      <div class="read">点击阅读</div>
      <el-image
        style="width: 114px;
       height: 140px;
       margin: 10px 27px"
        :src="fit.url"
        fit="fill"></el-image>
        <p class="title" style="">{{fit.title}}</p>
     </div>
     </div>
    </el-tab-pane>
  </el-tabs>
    <el-tabs v-model="activeName3" @tab-click="handleClick">
    <el-tab-pane label="宅基地/房屋买卖合同" name="first">
     <div class="demo-image" style="overflow:hidden">
     <div class="block item"  v-for="fit in fitsFive" :key="fit.title" @click="topath(fit)">
      <div class="read">点击阅读</div>
      <el-image
        style="width: 114px;
       height: 140px;
       margin: 10px 27px"
        :src="fit.url"
        fit="fill"></el-image>
        <p class="title" style="">{{fit.title}}</p>
     </div>
     </div>
    </el-tab-pane>
    <el-tab-pane label="土地互换合同" name="second">
          <div class="demo-image" style="overflow:hidden">
     <div class="block item"  v-for="fit in fitsSix" :key="fit.title" @click="topath(fit)">
      <div class="read">点击阅读</div>
      <el-image
        style="width: 114px;
       height: 140px;
       margin: 10px 27px"
        :src="fit.url"
        fit="fill"></el-image>
        <p class="title" style="">{{fit.title}}</p>
     </div>
     </div>
    </el-tab-pane>
  </el-tabs>
   </div>
</template>
<script>
export default {
  data () {
    return {
      activeName1: 'first',
      activeName2: 'first',
      activeName3: 'first',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg',
      fitFirt: [{
        id: 1,
        title: '家庭农场土地承包合同',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 2,
        title: '农村土地承包经营权流',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 3,
        title: '农村土地承包经营权入',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 4,
        title: '荒山荒坡承包合同',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      } ],
      fitSecond: [{
        id: 5,
        title: '农民土地转让协议范本',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 6,
        title: '林地转包合同',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 7,
        title: '房屋土地转让合同',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 8,
        title: '农村耕地转让合同范本',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      } ],
      fitsThrid: [{
        id: 9,
        title: '2018年土地流转协',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 10,
        title: '2017最新农村土地',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 11,
        title: '2018农村土地流转',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 12,
        title: '2018年农村土地转',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 13,
        title: '2017最新版土地流',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }],
      fitsFouth: [{
        id: 14,
        title: '林权抵押合同',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 15,
        title: '借款林权抵押合同',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 16,
        title: '土地使用权抵押合同',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 17,
        title: '2015最新土地抵押',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 18,
        title: '2014土地抵押借款',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }],
      fitsFive: [
        {
          id: 19,
          title: '经济适用住房买卖合同',
          url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
        }, {
          id: 20,
          title: '2016海南省琼中县',
          url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
        }, {
          id: 21,
          title: '政府土地买卖合同',
          url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
        }, {
          id: 22,
          title: '房屋土地买卖合同',
          url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
        }, {
          id: 23,
          title: '在房屋买卖过程中哪些',
          url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
        }
      ],
      fitsSix: [{
        id: 24,
        title: '土地置换协议',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 25,
        title: '农村土地承包经营权互',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }, {
        id: 26,
        title: '土地互换合同范本示例',
        url: 'https://static.tuliu.com/themes/default/news/images/zixun_16.jpg'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    topath (val) {
      console.log(1111)
      this.$router.push({
        name: `contractItem${val.id}`,
        query: {
          title: val.title
        }
      })
    }
  }
}
</script>

<style>
.msg{
   margin-top: 30px;
   margin-bottom: 20px;
    padding :10px 10px;
    height: 40px;
    line-height: 40px;
    margin-right: 50px;
    border-left: solid 4px #ff9f00;
}
.item{
    width: 168px;
    float: left;
    text-align: center;
    line-height: 25px;
    margin: 20px 0;
    position: relative
}
.read{
    width: 114px;
    height: 140px;
    position: absolute;
    left: 27px;
    top: 10px;
    text-align: center;
    line-height: 140px;
     opacity: 0;
    /* display: none;  */
    transition: all 0.1s linear 0s;
    background: rgba(0,0,0,0.5);
}
.title{
 font-size: 14px;
 color: rgb(68, 68, 68);
}
.title:hover{
 cursor: pointer;
 color: rgb(255, 159, 0);
}
.item:hover .read{
  cursor: pointer;
  z-index: 1111;
  color: rgb(255, 255, 255);
  opacity: 1;
}
</style>
