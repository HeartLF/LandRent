<template>
<div>
 <h1><i></i>{{title}}
</h1>
<div class="contract_sample_box"><p style="text-indent:2em;">甲方（出租方）：</p>

<p style="text-indent:2em;">乙方(承包方）：</p>

<p style="text-indent:2em;">依据国家有关法律、法规和政策规定．经村部两委会研究决定，双方本着平等、资源的原则，经双方协商一致，就荒地承包经营权出租事宜，签订本合同。</p>

<p style="text-indent:2em;"><span style="color:#FF0000"><strong>一、承包荒山荒坡的基本情况及用途</strong></span></p>

<p style="text-indent:2em;">甲方将位村东北荒坡，租给乙方栽植核桃树、种植、养业等。四至：东至柳沟河西畔，西至新推道路外边，南至高速公路，北至杨槐林和杨树林北边。不准毁坏杨、槐林木。西边道路由乙方无偿使用。</p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">二、出租期限承包期可分三期、为50年。</span></strong></p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">三、第一期为20年、即从xx年xx月xx日至xx年xx月xx日止。</span></strong></p>

<p style="text-indent:2em;">乙方应一次性付清50年的承包费20万元。承包到期后、乙方有排他性的优先继续承包权20年、如乙方放弃二期承包权，所享用不予退还。二期承包到期后，如乙方自愿继续享有排他性的承包权10年，也可无偿退出。</p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">四、租金支付时间与方式</span></strong></p>

<p style="text-indent:2em;">合同签订当日，乙方向甲方一次性支付全部租金共计人民币：￥200000元贰拾万元整)</p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">五、甲方的权利与义务</span></strong></p>

<p style="text-indent:2em;">1、对乙方的生产经营活动进行监督</p>

<p style="text-indent:2em;">2、依法维护双方的权益不受任何侵犯</p>

<p style="text-indent:2em;">3、法律法规规定的其他权利和义务。</p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">六、乙方的权利和义务</span></strong></p>

<p style="text-indent:2em;">1、乙方在承包租荒坡上拥有经营自主权，产品处置权和收益权。</p>

<p style="text-indent:2em;">2、合同期内如果国家对荒山荒坡进行补贴或征用，地上附着物归乙方，土地补偿金甲、乙双方对半分成。</p>

<p style="text-indent:2em;">3、经甲方同意后。乙方可以在不改变用途的情况下进行转租。合同期满后，乙方有续租的优先权，</p>

<p style="text-indent:2em;">4、法律法规规定的其他权利和义务。</p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">七、违约责任本合同签订后，除双方协议一致外</span></strong>，任何一方不得无故解除合同．如果乙方违约则应当赔偿甲方的经济损失：缴纳违约金人民币：￥50000元（伍万元整）；如果甲方违约则应当赔偿乙方的经济损失：除地上物外，缴违约金人民币：￥50000元(伍万元整)。</p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">八、纠纷的解决方式</span></strong></p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">在合同的旅行中发生争议，由双方协商解决，协商不成起诉到当地法院即代县人民法院。</span></strong></p>

<p style="text-indent:2em;"><strong><span style="color:#FF0000">九、其他</span></strong></p>

<p style="text-indent:2em;">本合同一式二份，双方个执一份，双方签字盖章后生效。</p>

<p style="text-indent:2em;">甲方：</p>

<p style="text-indent:2em;">乙方：</p>

<p style="text-indent:2em;">合同签证：</p>

<p style="text-indent:2em;">XXX年XX月XX日</p>
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
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/36403'
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
