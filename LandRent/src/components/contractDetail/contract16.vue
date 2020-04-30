<template>
<div>
 <h1><i></i>{{title}}
</h1>
<div class="contract_sample_box"><p style="text-indent:2em;">贷款人（抵押权人）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （以下简称甲方）</p>

<p style="text-indent:2em;">借款人（抵押人）：&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">性别：&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出生日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">身份证号码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">住址:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （以下简称乙方）&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">&nbsp;乙方因资金需求，以其拥有的所有权林地、树木及《中华人民共和国林权证》作为抵押物向甲方申请借款。产权共有人用作抵押的林地座落于&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （四至界址所有人《林权 证》为准），林权证编号为：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 林证字（2007）第&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 号，林地面积&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 亩。落叶松、樟子松、杨树。乙方申请借 款人民币壹拾伍万元整。根据当前市场价格，双方协商树木价值叁拾万元。甲方根据抵押物价值同意向乙方发放50%贷款。根据公正、平等、自愿的原则，双方经协商，达成如下协议：</p>

<p style="text-indent:2em;">&nbsp;一、乙方在&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;林业局取得《林权抵押登记证明》。&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">二、乙方保证抵押物为其合法所有、并依法享有处分权的非争议财产。保证林权证的真实、合法、有效，承诺在抵押贷款期间 所抵押的林木未经抵押权人同意不得采伐，不得办理林木所有权转让变更手续。、</p>

<p style="text-indent:2em;">&nbsp;三、乙方的抵押物在甲方抵押期限以借款清偿为准。借款到 期，乙方无法偿还借款本息，乙方有义务无条件协助甲方对已作抵押的树木、林地使用权采取拍卖、变卖、折价等方式予以处分后优先偿还此借款本息。处分抵押物所需费用由乙方承担。</p>

<p style="text-indent:2em;">&nbsp; 四、乙方借款人民币壹拾伍万元，￥150，000.00元 借款期限：壹年，自2012年4月18日至2012年12月18日止。 借款利率：&nbsp;&nbsp;&nbsp;&nbsp; ‰，随国家利率调整日调整。每3个月还息一次。逾期加收营业日执行利率50%。&nbsp;</p>

<p style="text-indent:2em;">五、甲方保证乙方在借款期限内保管好乙方《中华人民共和国林权证》、《林权抵押证明》等有关资料。债务全部清偿后交还乙方。</p>

<p style="text-indent:2em;">&nbsp;六、本合同未尽事宜，按照《中华人民共和国物权法》和国家林地抵押管理的规定办理。&nbsp;</p>

<p style="text-indent:2em;">七、&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 及有关文件为本合同组成部分。本合同一式三份，甲、乙、林权登记机关各执一份。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">甲方：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （公章）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">负责人（签字）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">乙方（签押）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style="text-indent:2em;">共有人（签押）：</p>
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
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/26978'
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
