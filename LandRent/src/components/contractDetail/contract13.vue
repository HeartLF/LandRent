<template>
<div>
 <h1><i></i>{{title}}
</h1>
<div class="contract_sample_box"><p style="text-align:center"><strong>2018年农村土地转让合同范本（供参考）</strong></p>

<p style="text-indent:2em;">转让方(以下简称甲方)：</p>

<p style="text-indent:2em;">受让方(以下简称乙方)：</p>

<p style="text-indent:2em;">甲乙双方按照《农村土地承包法》《农村土地承包经营权流转管理办法》等有关法律法规和国家有关政策的规定，本着依法、自愿、有偿的原则，经双方协商一致，就土地转让事宜，订立本合同。</p>

<p style="text-indent:2em;">一、转让标的</p>

<p style="text-indent:2em;">1.甲方将其承包经营的位于_____村组小地名叫____的土地承包经营权永久转让给乙方。</p>

<p style="text-indent:2em;">2.地块四至：</p>

<p style="text-indent:2em;">东齐：西齐：</p>

<p style="text-indent:2em;">南齐：北齐：</p>

<p style="text-indent:2em;">3.面积：</p>

<p style="text-indent:2em;">二、转让期限：永久。</p>

<p style="text-indent:2em;">三、转让费：共计人民币大写： (￥： )</p>

<p style="text-indent:2em;">四、支付方式和时间： 年 月 日前一次性付清。以甲方收据为证。</p>

<p style="text-indent:2em;">五、双方约定</p>

<p style="text-indent:2em;">1.本协议自双方签字(印)之日甲方收款后即生效。</p>

<p style="text-indent:2em;">2.自协议生效之日起，该地块的管理权及使用权完全归乙方所有，甲、乙方及其家属、亲属人等不得以任何借口反悔，否则，视为违约。违约者，按该地块转让费的___倍价付给对方。</p>

<p style="text-indent:2em;">3.乙方在使用该地块的过程中，如出现与该地块的争端问题或受到外人干涉阻碍等事端，甲方应立即出面排解，直至平息纠纷，排除障碍为止，为乙方顺利使用该地创造有利条件。若因甲方化解无效导致乙方不能顺利使用该地或因贻误时间所造成的损失，应由甲方负责。</p>

<p style="text-indent:2em;">六、争议条款</p>

<p style="text-indent:2em;">因本合同的订立、效力、履行、变更及终止等发生争议时，甲乙双方应协商解决，协商不成的按下列第____种方式解决：</p>

<p style="text-indent:2em;">1、提请村民委员会、乡(镇)人民政府、农业承包合同管理机关调解;</p>

<p style="text-indent:2em;">2、向有管辖权的人民法院提起诉讼。</p>

<p style="text-indent:2em;">七、其他条款</p>

<p style="text-indent:2em;">本合同未尽事宜，可经双方协商一致签定补充协议。补充协议与本合同具有同等效力。 本合同一式三份，由甲乙双方和村委会各执一份。</p>

<p style="text-indent:2em;">甲方(公章)：_________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乙方(公章)：_________</p>

<p style="text-indent:2em;">法定代表人(签字):_________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法定代表人(签字)：_________</p>

<p style="text-indent:2em;">_________年____月____日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________年____月____日</p>
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
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/53125'
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
