<template>
<div>
 <h1><i></i>{{title}}
</h1>
<div class="contract_sample_box"><p style="text-align: center;"><strong>房屋土地转让合同</strong></p>

<p style="text-indent:2em;">卖方：_____________________________________________ (简称甲方)&nbsp;</p>

<p style="text-indent:2em;">身份证：___________________________________________ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>

<p style="text-indent:2em;">买方：_____________________________________________ &nbsp;(简称乙方)&nbsp;</p>

<p style="text-indent:2em;">身份证：___________________________________________ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>

<p style="text-indent:2em;">根据《中华人民共和国合同法》、《中华人民共和国城市房地产管理法》、 《中华人民共和国土地管理法》及其它有关法律、法规之规定,在平等、自愿、协商一致的基础上,甲乙双方达成如下协议: &nbsp;</p>

<p style="text-indent:2em;"><strong>第一条 乙方所购买商品房的基本情况 &nbsp;</strong></p>

<p style="text-indent:2em;">乙方向甲方购买的商品房位于________________，为________（楼盘）____（栋、楼）______室。该商品房为现房，建筑面积为_______平方米（为实测面积），土地使用权面积为__________平方米（□独用、□共用），其分摊面积为________平方米。甲方依法获得并合法拥有该商品房的房屋所有权及土地使用权,房屋产权权属证号为:孝感市房权证第_______号，所占土地权属证号为：孝南国用（ &nbsp; &nbsp; ）第_______号。 &nbsp;</p>

<p style="text-indent:2em;"><strong>第二条 价格与费用 &nbsp;</strong></p>

<p style="text-indent:2em;">1、该商品房的售价总额为人民币___________元,大写为___拾__万 __千__佰__拾__角__分。 &nbsp;</p>

<p style="text-indent:2em;">2、甲方同意将该商品房原入住费用全部无偿转给乙方。&nbsp;</p>

<p style="text-indent:2em;"><strong>第三条 付款约定 </strong>&nbsp;</p>

<p style="text-indent:2em;">转让以现金的方式交易，由乙方在合同签订之日一次性付清。&nbsp;</p>

<p style="text-indent:2em;"><strong>第四条 &nbsp;转让后手续办理</strong> &nbsp;</p>

<p style="text-indent:2em;">现金交付合同签订后，甲方办妥该房屋过户至乙方的相关手续（包括房产及土地等相关手续），办理产权相关费用由双方自行协商解决。</p>

<p style="text-indent:2em;"><strong>第五条 &nbsp;法律责任</strong> &nbsp;</p>

<p style="text-indent:2em;">本合同经双方签字（盖章）后生效，双方必须严格遵守本合同执行，不得违约，如有一方违约，另一方有权依法起诉并要求赔偿。 &nbsp;</p>

<p style="text-indent:2em;">本合同未尽事宜，由甲乙双方另行协商解决。 &nbsp;</p>

<p style="text-indent:2em;">本合同一式五份，甲乙双方各执一份，公证机关存档一份 &nbsp; &nbsp;</p>

<p style="text-indent:2em;">甲方（签字盖章）： &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>

<p style="text-indent:2em;">乙方（签字盖章）： &nbsp;&nbsp;</p>

<p style="text-align: right;">年 &nbsp; &nbsp;月 &nbsp; 日</p>
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
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/26903'
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
