<template>
<div>
 <h1><i></i>{{title}}
</h1>
<div class="contract_sample_box"><p style="text-indent:2em;">甲方：</p>

<p style="text-indent:2em;">乙方：</p>

<p style="text-indent:2em;">经友好协商，本着诚实守信的原则，双方就甲乙双方土地置换事项达成如下协议。</p>

<p style="text-indent:2em;"><span style="color:#000000">一、置换土地内容：</span></p>

<p style="text-indent:2em;">1、甲方将******自西院墙起向东*****米止，自*****南 &nbsp;&nbsp;米起至南院墙止，该长方形土地共 &nbsp;&nbsp;&nbsp;平方米置换给乙方进行建设使用。 &nbsp;</p>

<p style="text-indent:2em;">2、乙方将*****东院墙向东平移****米止，该长方形土地共 &nbsp;&nbsp;&nbsp;&nbsp;平方米置换给甲方用作*****使用。 &nbsp;</p>

<p style="text-indent:2em;">3、置换土地平面图。 &nbsp;</p>

<p style="text-indent:2em;">二、甲乙双方根据划定的置换土地的面积免费置换，互不要求差价。置换后各自对置换后的土地拥有使用权。 &nbsp;</p>

<p style="text-indent:2em;">三、乙方负责先根据甲方提供的院墙施工图纸，先将操场东面的东、北、南三面院墙修建完毕，再修建操场西、北院墙，保证*****四面院墙全部封闭，将操场东新置换给甲方的土地进行平整至与甲方原有操场完全水平，以确保学生能正常上课后，才可在甲方置换给乙方的土地上进行建设。乙方承担全部院墙建设费用，及*****平整费用。 &nbsp;</p>

<p style="text-indent:2em;">四、全部院墙修建完成后，甲方拥有院墙所有权。 &nbsp;</p>

<p style="text-indent:2em;">五、在土地置换过程中，及院墙建设过程中，乙方全部负责与周边村民的关系协调，若与周边村民发生任何纠纷，由乙方负责协调处理，若村民阻止向东置换土地而使得甲方无法获得该块土地，甲方有权终止本合同。甲方不再将土地置换给乙方。 &nbsp;</p>

<p style="text-indent:2em;">六、土地置换完成后，乙方在新修建的操场西院墙向西一米处，新修建的操场北院墙向南一米处进行房屋建设，该一米位置，乙方全部出资负责将地面进行水泥硬化，不得在下面修建下水道，新修建的房屋不得向校园内通下水道，屋顶向西留排水口，不得向东留排水口。 &nbsp;</p>

<p style="text-indent:2em;">七、本合同附件与本合同具有同等的法律效力。 &nbsp;</p>

<p style="text-indent:2em;">八、本合同未尽事宜，由甲乙双方协商解决，经协商不成时，提请人民法院裁决。 &nbsp;</p>

<p style="text-indent:2em;">九、本合同一式三份，甲方二份，乙方一份，经双方签字盖章后生效。 &nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">甲方： &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">乙方： &nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">法人代表： &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年 &nbsp;&nbsp;月 &nbsp;&nbsp;日 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">法人代表： &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年 &nbsp;&nbsp;月 &nbsp;&nbsp;日</p>
</div>
<div style="text-align:center;margin:20px 20px"><el-button class="btn" @click="download">我要下载</el-button></div>
</div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$route.query.title
    }
  },
  methods: {
    download () {
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/52342'
    }
  }
}
</script>

<style scoped>
h1{
padding: 10px 10px;
margin: 10px 10px;
font-weight: normal;
height: 30px;
line-height: 30px;
font-size: 22px;
color: #444;
}
i{
    width: 23px;
    height: 30px;
    float: left;
    background: url(https://static.tuliu.com/themes/default/news/information_img/mes_ico5.png) 0 0;
    margin-right: 10px;
}

.contract_sample_box{
-webkit-tap-highlight-color: transparent;
font: 14px "\5B8B\4F53",san-serif;
font-family: "Microsoft YaHei";
box-sizing: border-box;
text-rendering: optimizeLegibility;
margin: 0;
height: 640px;
overflow-y: scroll;
border: solid 1px #e5e5e5;
background-color: #f7f7f7;
padding: 30px 70px;
font-size: 14px;
color: #999;
line-height: 30px;
}
.btn{
 width: 140px;
 height: 47px;
 padding: 0;
 border: 0;
 border-radius: 6px;
 font-size: 20px;
 line-height: 47px;
 background: #FF9F00;
 box-shadow: 0 2px 0 #C8631D;
 color: #fff;
}
</style>
