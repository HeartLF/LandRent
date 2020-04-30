<template>
<div>
 <h1><i></i>{{title}}
</h1>
<div class="contract_sample_box"><p style="text-align:center"><strong>2018农村土地流转合同范本（供参考）</strong></p>

<p style="text-indent:2em;">甲方： 乙方：</p>

<p style="text-indent:2em;">为了发展高效农业，经双方共同协商，甲乙双方本着平等、自愿、有偿的原则，就土地承包经营权租赁事宜，订立本合同。</p>

<p style="text-indent:2em;">一、承包________________土地面积共为_________亩，四至界限为东至_____________北至__________。</p>

<p style="text-indent:2em;">二、租赁期限：土地租赁期限为20年，自______年____月____日至_____年____ 月____日止。</p>

<p style="text-indent:2em;">三、租赁价格及租赁方式：每亩每年租金为_________，合同期内承包金一年一结，以每年的___月____日为限，付款时间为每年______月______日。</p>

<p style="text-indent:2em;">四、合同生效后，甲方既失去土地使用权，同时不能干涉乙方对该土地的正常生产经营行为，合同到期后需复耕。</p>

<p style="text-indent:2em;">五、甲方必须对乙方生产经营活动提供优良投资环境和社会治安环境，并提供必要的便利，在乙方的生产中甲方不能以任何借口阻挠。</p>

<p style="text-indent:2em;">乙方有权无偿使用村组内的水渠、道路、用电等公共设施。 在承包期内乙方有权转让土地使用权。</p>

<p style="text-indent:2em;">六、流转土地在国家或集体使用该土地时，乙方应服从且有权获得相应的补偿和投入建设的地面附属物补偿费，地下矿产、石油归甲方。</p>

<p style="text-indent:2em;">七、有下列情况之一的，本合同可以解除或终止。</p>

<p style="text-indent:2em;">①、经双方当事人协商一致，可以解除本合同。</p>

<p style="text-indent:2em;">②、订立的本合同依据国家政策发生重大变化。</p>

<p style="text-indent:2em;">③、一方违约，使合同无法履行的。</p>

<p style="text-indent:2em;">④、乙方经济状况显著恶化，有证据表明合同无法履行的。 ⑤、因不可抗力的重大自然灾害使本合同无法履行的。</p>

<p style="text-indent:2em;">⑥、合同期内，如因国家和政府农业基础设施占用或征用该土地时，本合同自行终</p>

<p style="text-indent:2em;">止，甲乙双方不负违约责任。 八、违约责任</p>

<p style="text-indent:2em;">①、乙方对应付的租赁费不能以任何理由拖欠，如果发生拖欠行为，甲方有权收回土地。</p>

<p style="text-indent:2em;">②、因变更或解除本合同使一方造成损失的，除依法可免除责任外，由责任方负责赔偿。</p>

<p style="text-indent:2em;">③、甲方非法干预乙方生产经营活动，给乙方造成损失的应给与赔偿，情节严重的将依法处理。</p>

<p style="text-indent:2em;">九、合同期满后，若甲方继续流转该土地的使用权，乙方有优先承包的权利，若不继续流转,乙方对土地附属物享有处理的权利。</p>

<p style="text-indent:2em;">本合同如遇法律、法规和现行农业政策相抵触的未尽事宜，经双方协商一致后可签订补充协议，与本合同有同等法律效力。</p>

<p style="text-indent:2em;">十、本合同一式六份甲乙双方村组各执一份双方签字后生效。</p>

<p style="text-indent:2em;">甲方： 乙方：</p>

<p style="text-indent:2em;">2018年____月____日</p>

<p style="text-indent:2em;"><span style="color:#0000FF">合同签订最好咨询专业人士，以免发生不必要的纠纷。</span></p>
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
      window.location.href = 'https://www.tuliu.com/news/index/contractDownload/new_id/53769'
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
