<template>
<div>
 <h1><i></i>{{title}}
</h1>
<div class="contract_sample_box"><p>立契约书人债权人x x x(以下简称甲方)债务人x x x(以下简称乙方)，兹因土地抵押借款事宜，经双方同意订立各条款如下：</p>

<p>第一条 乙方所有下列土地提向甲方抵押借款。</p>

<p>第二条 本约抵押借款金额人民币x x 万元。</p>

<p>第三条 本约抵押借款期间&nbsp;，自x x x x年x月x日起，至x x x x年x月x日止，共计x 年。期限届满之日清偿。</p>

<p>第四条 本约抵押借款利息，依国家银行核定的放款利率计算，并于每月一日计提利息。</p>

<p>第五条 本约抵押借款的土地应提向政府主管机关办理抵押权设定登记，并于办妥抵押权设定时，甲方应将全部借款一次交付与乙方。</p>

<p>第六条 本约办妥抵押权设定登记后，其土地所有权、他项权利证明书及设定契约书均由甲方收执。</p>

<p>第七条 本约办理抵押权设定登记，所需的印花税、登记费及代办费均由乙方负担。</p>

<p>第八条 本约期限届满前后，若乙方还清借款时，甲方应会同办理抵押权涂销登记，不得借词刁难或故意拖延，若乙方届满不清偿，甲方得依法申请法院拍卖抵押的不动产土地。</p>

<p>第九条 本约自签订日下生效。</p>

<p>第十条 本契约书一式两份，双方各执一份为凭。</p>

<p style="text-align:right">立契约书人</p>

<p style="text-align:right">甲方：x x x</p>

<p style="text-align:right">住址：</p>

<p style="text-align:right">身份证统一号码：</p>

<p style="text-align:right">乙方：x x x</p>

<p style="text-align:right">住址：</p>

<p style="text-align:right">身份证统一号码：</p>

<p style="text-align:right">x x x x年x月x日</p>
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
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/7912'
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
