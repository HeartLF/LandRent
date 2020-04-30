<template>
<div>
 <h1><i></i>{{title}}
</h1>
  <div class="contract_sample_box"><p style="text-align:center">　　<strong>2015最新<a href="#">土地抵押</a>合同 </strong></p>

<p>　　甲方：(贷款人) 　　　　　　　　　　　　乙方：（借款人）</p>

<p>　　根据《中华人民共和国合同法》、《中华人民共和国担保法》、《中华人民共和国物权法》及有关法律、法规，当事人各方经协商一致，订立本协议。</p>

<p>　　一、甲方于 年 月 日向乙方发放借款 元，(大写： )借款期限 年 月 日起到 年 月 日止，借款利率为月 ％，乙方在每月 日前支付当月利息，利息一月一结。</p>

<p>　　二、乙方同意用的土地使用权做该笔借款的质押，土地使用权证号为： 　　　　使用权人为：</p>

<p>　　三、乙方应按甲方要求妥善保管质押财产，如有政府征用的情况，甲方有权对于补偿款予以提存或者乙方提前偿还全部借款。</p>

<p>　　四、出现主合同约定还款期限已到，乙方未依约归还甲方借款及利息的，甲方有权依法定方式处分乙方担保抵押财产。</p>

<p>　　1、甲方处理抵押所得借款，按乙方购买每亩土地价格的 的价格索取土地使用权，抵押价格按每亩 万元，共 亩，共计人民币 万元整。</p>

<p>　　2、甲方处理抵押所得借款，不足以偿还借款本息的，甲方有权另行 向乙方索偿。</p>

<p>　　五、乙方未返还甲方借款或不能按时付利息前，该抵押具有不可撤销性。乙方自愿放弃抗辩权、诉讼权、仲裁权，自愿接受有管辖权的人民法院执行局的强制执行，这是乙方的意思表达、承诺。</p>

<p>　　六、本协议自甲、乙双方签字之日起生效，自协议生效之日乙方无权变卖、转移、转赠、转卖、抵押财产。</p>

<p>　　七、在抵押协议期限内，乙方抵押财产因其保管不善造成损毁，甲方有权要求乙方恢复抵押财产原状，或要求乙方重新提供甲方认可的抵押财产。</p>

<p>　　八、乙方违反合同约定，擅自处分抵押财产的行为无效。甲方有权要求乙方恢复原状，并提前收回主合同项下的借款，并可以要求乙方支付借款总额的10%的违约金。</p>

<p>　　九、使用权人对抵押物必须拥有充分、无争议的所有权或者处分权。乙方因隐瞒抵押财产存在共有、争议、被查封、被扣押或已经设定过抵押权等情况，给甲方造成经济损失的应给甲方赔偿，并赔偿甲方主合同借款总额的10%的违约金。</p>

<p>　　十、本协议未尽事宜，甲乙双方协商可签订补充协议。</p>

<p>　　十一、本合同一式 份，其中甲方 份，乙方 份，效力相同。</p>

<p>　　十二、提示 甲方已提请乙方注意对本协议条款作全面、准确的理解，并应乙方要求作了相应的条款说明。签约各方对本协议含义认识一致。</p>

<p>　　本协议系无异义债权文书，如乙方不履行或不完全履行还本付息义务时，甲方有权依据本协议项下第四条和第五条中约定进行解决，乙方自愿接受。</p>

<p>　　甲方（贷款人）盖章： 　　　　　　　乙方（借款人）盖章：</p>

<p>　　负责人 　　　　　　　　　　　　　　法定代表人</p>

<p>　　或授权代理人 　　　　　　　　　　　或授权代理人</p>

<p>　　签约日期： 年 月 日 　　　　　　　　签约地点：</p>
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
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/9559'
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
