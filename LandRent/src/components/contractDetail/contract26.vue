<template>
  <div>
    <h1><i></i>{{ title }}</h1>
    <div class="contract_sample_box">
      <p style="text-align:center">
        <strong>农村土地承包经营权互换合同</strong>
      </p>

      <p>
        &nbsp; &nbsp; 甲方（单位或个人名称）：<br />
        &nbsp;乙方（单位或个人名称）：<br />
        因&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需要，甲、乙双方就依据农村土地承包合同和《农村集体土地承包经营权证书》所取得的部分或全部地块的土地承包经营权的互换及相关事宜达成如下协议：<br />
        一、互换标的<br />
        1、甲方调换给乙方的地块
      </p>

      <p>
        &nbsp; &nbsp;
        甲方调换给乙方的地块面积为&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亩，坐落于&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;。乙方获得该地块的承包经营权后将用于从事（主营项目）生产经营。
      </p>

      <p>&nbsp; &nbsp;2、乙方调换给甲方的地块</p>

      <p>
        &nbsp;
        &nbsp;乙方调换给甲方的地块面积为&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亩，坐落于&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;。甲方获得该地块的承包经营权后将用于从事（主营项目）生产经营。
      </p>

      <p>
        &nbsp; &nbsp; 二、互换土地期限<br />
        甲乙双方互换地块的经营期限为&nbsp;&nbsp;&nbsp;年，即自&nbsp;&nbsp;年&nbsp;&nbsp;月&nbsp;&nbsp;日起至&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;日止。
      </p>

      <p>
        &nbsp; &nbsp; 三、互换土地的权属和承包经营权<br />
        双方互换土地，在土地权属不变的前提下进行。土地互换后，甲、乙双方各自仍分别享有互换前原承包合同规定的权利，承担相应的义务。如在互换过程中发生经济补偿事项的，可在合同中明确约定。
      </p>

      <p>
        &nbsp; &nbsp; 四、交付方式和时间<br />
        互换土地的交付方式为 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
        交付的时间为 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <p>
        &nbsp; &nbsp; 五、违约责任<br />
        1、甲乙双方在合同生效后应本着诚信的原则严格履行合同义务。如一方当事人违约，应向守约一方支付违约金。违约金的数额为&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;。<br />
        2、如果违约金尚不足以弥补守约方经济损失时，违约方应在违约金之外增加支付赔偿金，赔偿金的具体数额依据具体损失情况确定。
      </p>

      <p>
        &nbsp; &nbsp; 六、争议条款<br />
        因本合同的订立、生效、履行、变更及终止等发生争议时，甲乙双方应协商解决，协商不成的按下列第&nbsp;&nbsp;&nbsp;种方式解决：<br />
        1、提请村民委员会、乡（镇）人民政府、农业承包合同管理机关调解；<br />
        2、提请&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仲裁委员会仲裁；<br />
        3、向有管辖权的&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人民法院提起诉讼。
      </p>

      <p>
        &nbsp; &nbsp; 七、生效条款<br />
        甲乙双方约定，本合同须经双方签字并经互换土地所在乡（镇）人民政府农村经营管理机构鉴证、备案后生效。
      </p>

      <p>
        &nbsp; &nbsp; 八、其他条款<br />
        1、本合同中未尽事宜，可经甲乙双方共同协商一致后签订补充协议，补充协议与本合同具有同等效力。<br />
        2、本合同一式四份，甲、乙双方各执一份，发包方和鉴证单位各执一份。
      </p>

      <p>
        甲方：（签章）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乙方：（签章）<br />
        法定代表人：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法定代表人：<br />
        住址：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住址：
      </p>

      <p>&nbsp;签约日期：&nbsp;&nbsp;年&nbsp;&nbsp;月&nbsp;&nbsp;日</p>

      <p>&nbsp;鉴证单位：（签章）</p>

      <p>&nbsp; 鉴证人：</p>

      <p>
        &nbsp;
        鉴证日期：&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;日
      </p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>
    </div>
    <div style="text-align:center;margin:20px 20px">
      <el-button class="btn" @click="download">我要下载</el-button>
    </div>
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
      window.location.href =
        'https://www.tuliu.com/news/index/contractDownload/new_id/8289'
    }
  }
}
</script>

<style scoped>
h1 {
  padding: 10px 10px;
  margin: 10px 10px;
  font-weight: normal;
  height: 30px;
  line-height: 30px;
  font-size: 22px;
  color: #444;
}
i {
  width: 23px;
  height: 30px;
  float: left;
  background: url(https://static.tuliu.com/themes/default/news/information_img/mes_ico5.png)
    0 0;
  margin-right: 10px;
}

.contract_sample_box {
  -webkit-tap-highlight-color: transparent;
  font: 14px '\5B8B\4F53', san-serif;
  font-family: 'Microsoft YaHei';
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
.btn {
  width: 140px;
  height: 47px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  font-size: 20px;
  line-height: 47px;
  background: #ff9f00;
  box-shadow: 0 2px 0 #c8631d;
  color: #fff;
}
</style>
