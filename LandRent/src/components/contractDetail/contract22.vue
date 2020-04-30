<template>
<div>
 <h1><i></i>{{title}}
</h1>
<div class="contract_sample_box"><p style="text-align: center;"><strong>房屋土地买卖合同（简易范本）</strong></p>

<p style="text-indent:2em;">甲方（卖方）：</p>

<p style="text-indent:2em;">乙方（买方）：</p>

<p style="text-indent:2em;">甲、乙双方就房屋买卖事项，经协商一致，达成以下合同条款：</p>

<p style="text-indent:2em;">一、甲方自愿将坐落在______市______区______路______小区____号楼___单元____室（建筑面积______平方米，储藏室_____平方米，产权证号___________）房地产出卖给乙方，并将与所出卖该房产的相关的土地使用权同时出卖给乙方（附房产证复印件及该房产位置图）。</p>

<p style="text-indent:2em;">二、双方议定上述房地产及附属建筑物总价款为人民币大写______________；即人民币小写_________。</p>

<p style="text-indent:2em;">三、乙方在签订本合同时，支付定金____________，即小写_________。</p>

<p style="text-indent:2em;">四、乙方支付定金之日起___个月内，向甲方支付首付款（定金从中扣除），首付款之外的款项通过银行住房按揭方式交付（有关期限和程序按照所在按揭银行规定办理）。</p>

<p style="text-indent:2em;">五、甲方保证该房产合法、权属清楚、有合法的土地使用权（已交纳土地出让金）。</p>

<p style="text-indent:2em;">六、办理房产证手续所产生的有关税费由___方承担。</p>

<p style="text-indent:2em;">七、乙方支付首付款后，甲方即积极配合乙方办理有关房产过户手续，待房产过户到乙方名下之时，乙方应向甲方付清全部房款余额。</p>

<p style="text-indent:2em;">八、甲方应在_______前将该房产交付乙方；届时该房产应无任何担保、抵押、房产瑕疵，无人租住、使用；无欠账，如电话费、水电费、物业管理费、取暖费、入网费、有线电视费等。</p>

<p style="text-indent:2em;">九、本合同签订后，如一方违反本合同条款，该方应向对方支付________元的违约金；一方如不能按规定交付房产或按规定支付房款，每逾期一日，应向对方支付五十元罚金，逾期30日视为毁约；如因政府及银行规定，本合同涉及房产手续客观上不能办理过户或银行不能办理按揭导致合同解除，不适用本条款。</p>

<p style="text-indent:2em;">十、交付该房产，甲方不得损坏该房产的结构、地面和墙壁及不适移动的物件，并将抽风机一台（型号：_______），空调两台（型号：___________），热水器（型号：_________），浴霸（型号：________），饮水机（型号：________），音响两台（型号：___________），晾衣架，房内灯具，前后门窗窗帘、电脑桌一张，橱卫设施，等让与乙方（含在房屋价值内）。</p>

<p style="text-indent:2em;">十一、本合同一式两份，具有同等法律效力，自双方签字之日生效。</p>

<p style="text-indent:2em;">十二、附加条款：________________________________________________________________________________________________________</p>

<p style="text-indent:2em;">甲方（卖方）： &nbsp; &nbsp; &nbsp; &nbsp; （印） 身份证号：</p>

<p style="text-indent:2em;">住址： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 电话：</p>

<p style="text-indent:2em;">年 月 日</p>

<p style="text-indent:2em;">乙方（买方）： &nbsp; &nbsp; &nbsp; &nbsp; （印）身份证号：</p>

<p style="text-indent:2em;">住址： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;电话：</p>

<p style="text-indent:2em;">年 月 日</p>
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
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/28241'
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
