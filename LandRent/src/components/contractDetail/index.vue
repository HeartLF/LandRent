<template>
  <div style="margin:30px 30px">
      <div class="contract_sample_box">
        <p style="text-indent:2em;">
          <strong>甲方：{{ item.person }}</strong>
        </p>

        <p style="text-indent:2em;">
          <strong>乙方：{{ renter }}</strong>
        </p>

        <p style="text-indent:2em;">
          为了促进经济发展，完善乡域内部土地承包体制，充分调动农牧民的积极性，甲乙双方本着平等、互利、共同发展的原则，经充分协商，现就有关土地承包问题达成如下合同条款，以供双方遵守。
        </p>

        <p style="text-indent:2em;">
          一、甲方辖区土地权属为国有，现承包给乙方种植经营，乙方在承包期内享有土地使用权，其承包面积为亩，(具体位臵：东至，南至，西至，北至)，合法从事农、林、牧、副业经营。
        </p>

        <p style="text-indent:2em;">
          二、本合同承包期{{ item.years }}年，<span style="color:red"
            >(自{{ date.year }}年{{ date.month }}月{{ date.day }} 日起至{{
              deadline.expriedYear
            }}
            年{{ deadline.expriedMonth }}月{{ deadline.expriedDay }}日止)</span
          >
        </p>

        <p style="text-indent:2em;">三、承包费及其他费用的交纳方式：</p>

        <p style="text-indent:2em;">
          1、依照《中华人民共和国土地管理法》及其他国家有关法律法规的规定，乙方承包土地必须向甲方缴纳土地承包费及其他国家法律、法规规定的费用。乙方因生产经营发生的一切费用，如水费、电费等由乙方负责承担，自行向相关部门交纳。
        </p>

        <p style="text-indent:2em;">
          2、乙方自年起开始向甲方交纳土地承包费，土地承包费为年至年每亩每年元;年至年每亩每年元;年至年每亩每年元。
        </p>

        <p style="text-indent:2em;">
          3、乙方必须于当年十一月三十日前交清土地承包费，逾期不交者，按所欠承包费每天3‰加收滞纳金。如一年不交纳承包费或连续两年弃荒者，承包合同白行终止，甲方有权无偿收回其承包土地，并依据《中华人民共和国土地管理法》、《合同法》及相关法律法规的规定另行发包。
        </p>

        <p style="text-indent:2em;">
          四、由于政府规划建设需要征用乙方所承包的土地，乙方应积极配合，征用土地造成的损失按国家相关政策执行。
        </p>

        <p style="text-indent:2em;">
          五、在履行合同期间，如果国家调整物价及有关指数，甲方有权调整收取乙方缴费标准，由于政策的变动，甲、乙双方无法履行合同时，必须终止合同。
        </p>

        <p style="text-indent:2em;">
          六、本合同由负责监督执行，并负责代收本合同规定乙方应缴纳的各项费用。
        </p>

        <p style="text-indent:2em;">
          七、甲方在改善农田水利基础设施及相关项目的实践中，乙方应承担部分建设资金，由甲方对人、财、物进行统一管理。
        </p>

        <p style="text-indent:2em;">八、甲方的权利义务</p>

        <p style="text-indent:2em;">(一)甲方的权利</p>

        <p style="text-indent:2em;">
          1、甲方有权对承包户进行国家有关法律法规及党在农村的各项政策进行宣讲，并组织实施，乙方应积极配合甲方的工作。
        </p>

        <p style="text-indent:2em;">
          2、甲方计算承包地面积按实有面积计算，扣除主道路、宅基地面积。
        </p>

        <p style="text-indent:2em;">
          3、甲方有权对全乡农田水利基础设施，种植业结构、畜牧业发展等进行调整，统一规划，统一建设，合理开发利用。
        </p>

        <p style="text-indent:2em;">
          4、甲方有权对乙方及雇工违反法律、法规行为(如违反宪法、刑法、土地法、计划生育政策、综合治理条例等)进行处理，并按有关法律、法规规定执行。
        </p>

        <p style="text-indent:2em;">
          5、乙方在当年如遇到不可抗拒的自然灾害，甲方应实事求是，因地制宜，根据实际情况和乙方申请做出相应缓减措施。
        </p>

        <p style="text-indent:2em;">(二)甲方的义务</p>

        <p style="text-indent:2em;">
          1、甲方有义务协调乙方与其他相邻土地承包户的关系。同时协助乙方解决相邻纠纷。
        </p>

        <p style="text-indent:2em;">
          2、甲方应保障乙方在承包期内的合法生产经营权。
        </p>

        <p style="text-indent:2em;">
          3、甲方应为乙方协调用水，用电等问题，实行统一管理。
        </p>

        <p style="text-indent:2em;">
          4、甲方应以市场为导向，引导或指导乙方的农作物种植及产业结构调整。
        </p>

        <p style="text-indent:2em;">九、乙方的权利和义务</p>

        <p style="text-indent:2em;">(一)乙方的权利</p>

        <p style="text-indent:2em;">
          1、乙方有权向甲方咨询国家有关法律法规及党在农村的各项政策。
        </p>

        <p style="text-indent:2em;">
          2、乙方在当年如遇到不可抗拒的自然灾害，可根据实际情况向甲方申请相应缓减措施。
        </p>

        <p style="text-indent:2em;">
          3、乙方有权对农业生产等事宜进行建议，甲方在具体实施中应
        </p>

        <p style="text-indent:2em;">充分考虑其意见。</p>

        <p style="text-indent:2em;">
          4、乙方有权监督甲方的管理效能。甲方在处理矛盾纠纷工作中，乙方对不合理现象在尊重事实的情况下，可实事求是的向甲方提出合理化建议和解决办法。
        </p>

        <p style="text-indent:2em;">
          5、乙方在承包期间，如果甲方无故终止或变更合同，乙方、有权要求甲方赔偿因此造成的一切经济损失。
        </p>

        <p style="text-indent:2em;">(二)乙方的义务</p>

        <p style="text-indent:2em;">
          1、乙方及雇工必须依法生产、合理经营，必须遵纪守法、严格遵守国家、自治区、自治州的有关法律、法规及条例规定，服从统一管理。
        </p>

        <p style="text-indent:2em;">
          2、乙方必须按时交纳国家规定的各项费用和承包费，不得以任何借口拖欠，否则甲方有权按违约责任第3款执行。
        </p>

        <p style="text-indent:2em;">
          3、乙方在承包期内，不得超越土地经营范围擅自改变土地农业用途和非法开荒，防止承包土地水土流失、沙化、盐碱化等现象发生，必须按照土地开发有关规定在所承包土地范围内栽种适当比例的防护林，合理保持当地生态平衡。否则甲方有权按违约责任第3款执行。
        </p>

        <p style="text-indent:2em;">
          4、乙方在承包期内不得以任何方式转让、出租、抵押，土地。若需转让、出租、抵押和继承的。需报甲方审核批准备案后方可进行，并按程序办理相关转让手续否则转让、出租、抵押和继承手续无效。甲方有权按违约责任第3款执行。
        </p>

        <p style="text-indent:2em;">
          5、乙方应接受甲方对农作物的种植引导或指导工作。甲方可根据政府宏观调控种植的任务调整乙方的种植计划。乙方必须服从。
        </p>

        <p style="text-indent:2em;">
          6、乙方在承包期内所建房屋、栽植的林木、及其他固定设施归乙方所有，如合同变更，甲、乙双方可协商解决。
        </p>

        <p style="text-indent:2em;">
          7、在本合同期内，乙方如发生意外死亡或病逝，其家属和子女有权继承。在无经济实力和能力经营的情况下，必须通过甲方同意后方可按程序办理相关转让手续，否则转让无效。由此造成的一切责任及损失由乙方承担。
        </p>

        <p style="text-indent:2em;">十、违约责任</p>

        <p style="text-indent:2em;">
          1、甲乙双方必须严格履行本合同条款，不得违反、如有一方违反给另一方造成损失的，由过错方负责赔偿。
        </p>

        <p style="text-indent:2em;">
          2、甲乙双方任何一方不得擅自终止合同，不得随意变更合同条款，如有违反赔偿对方的经济损失并终止合同。
        </p>

        <p style="text-indent:2em;">
          3、乙方如出现违反本合同第九条所列的款项情形之一，甲方可限期乙方l5日内改正，逾期不改，甲方有权终止合同，无偿收回土地，由此造成的损失及责任，由乙方自负。
        </p>

        <p style="text-indent:2em;">
          十一、本合同不随双方人事变动而随意改变，若遇国家政策、法律、条例等变动造成本合同与之相违背抵触的，按国家政策、法律、条例规定执行。双方未尽事宜，经双方协商取得一致意见后达成书面协议随本合同附后，作为本合同补充条款，同样具有法律效力。
        </p>

        <p style="text-indent:2em;">
          十二、本合同一式三份，自以方签字或盖章之日起生效。本合同之前甲乙双方所签定的所有土地承包合同作废。
        </p>
        <h4>出租方：{{ item.person }}</h4>
        <h4>
          签订日期：<span style="color:red"
            >{{ date.year }}年{{ date.month }}月{{ date.day }}</span
          >
        </h4>
        <h4>承租方： {{ renter }}</h4>
        <h4>
          签订日期：<span style="color:red"
            >{{ date.year }}年{{ date.month }}月{{ date.day }}</span
          >
        </h4>
      </div>
      <el-image :src="signature"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Contract',
  computed: {
    ...mapState(['signature']),
    date () {
      let nowDate = new Date(this.$route.query.createTime)
      let year = nowDate.getFullYear()
      let month =
        nowDate.getMonth() + 1 < 10
          ? '0' + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1
      let day =
        nowDate.getDate() < 10 ? '0' + nowDate.getDate() : nowDate.getDate()
      let dateStr = `${year}${month}${day}`
      return {
        year: year,
        month: month,
        day: day,
        dateStr: `${dateStr}`
      }
    },
    allPrice () {
      return +this.item.price * +this.item.years
    },
    renter () {
      let obj = localStorage.getItem('useInfo')
      return JSON.parse(obj).name
    }
  },
  data () {
    return {
      //   dialogTableVisible: true
      src: '',
      checked: false,
      deadline: '',
      item: {}
    }
  },
  created () {
    this.getLandInfo(this.$route.query.landId)
  },
  methods: {
    submit () {
      if (this.checked) {
        this.$router.push({
          name: 'applay',
          query: {
            id: this.item.id
          }
        })
      } else {
        this.$message.error('请点击同意')
      }
    },
    cancel () {
      this.$emit('update:showModel', false)
    },
    getAfterNYear (startdate, nextYear) {
      var expriedYear = +startdate.substring(0, 4) + nextYear
      var expriedMonth = startdate.substring(4, 6)
      var expriedDay = startdate.substring(6)
      // 考虑二月份场景，若N年后的二月份日期大于该年的二月份的最后一天，则取该年二月份最后一天
      if (expriedMonth === '02' || expriedMonth === 2) {
        var monthEndDate = new Date(expriedYear, expriedMonth, 0).getDate()
        if (parseInt(expriedDay) > monthEndDate) {
          // 为月底时间
          // 取两年后的二月份最后一天
          expriedDay = monthEndDate
        }
      }
      return {
        expriedYear,
        expriedMonth,
        expriedDay
      }
    },
    async getLandInfo (landId) {
      const res = await this.$http.post('land/getLandById', {
        landId
      })
      const {data} = res
      if (data && data.state === 1) {
        this.item = data.data
        this.deadline = this.getAfterNYear(this.date.dateStr, +this.item.years)
      }
    }
  }
}
</script>

<style></style>
