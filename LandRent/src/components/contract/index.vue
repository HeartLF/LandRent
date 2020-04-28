<template>
  <div>
    <el-dialog title="土地租赁合同" :visible.sync="show">
        <div  ref="imageTofile">
                <h4>甲方：{{item.person}}</h4>
                <h4>乙方：{{renter}}</h4>
                <p>根据相关法律、法规、政策规定，就乙方租赁甲方土地事宜，经双方协商一致，现签订如下协议，以便共同遵守：</p>
                <p>一、合同标的：租赁土地(土地性质为国有)共 亩。土地位于：</p>
                <p>二、租赁期限：租赁期限 年，<span style="color:red">(自{{date.year}}年{{date.month}}月{{date.day}} 日起至{{deadline.expriedYear}} 年{{deadline.expriedMonth}}月{{deadline.expriedDay}}日止)</span>。</p>
                <p>三、租赁价款及付款办法：<span style="color:red">{{item.years}}年一次性支付{{allPrice}}元</span></p>
                <p>四、租赁用途：由乙方自主使用。</p>
                <p>五、甲方的权利义务：</p>
                <p>1、拥有土地所有权，但不涉及乙方区域内规划等工作。在合同期内甲方应尊重乙方的生产经营自主权，不得干涉乙方正常的经营活动。</p>
                <p>2、负责协调处理乙方与甲方及周边土地的关系，以维护乙方对该地的正常使用。</p>
                <p>3、除收取租赁费以外，不再收取任何款项。</p>
                <p>六、乙方的权利和义务：</p>
                <p>1、在租赁期内，拥有租赁土地的使用权。</p>
                <p>2、一次性支付甲方{{item.years}}年租金。</p>
                <p>3、合同期间如遇到国家政策变动或国家征用，乙方必须服从，合同解除，没产生的租金一次性退还乙方，一切赔偿归甲方所有。</p>
                <p>4、乙方不得转租，如出现转租视为乙方违约，合同解除。</p>
                <p>七、特殊约定</p>
                <p>在租赁期内，国家或集体征用土地，乙方应无条件服从，土地及地上附属物补偿款都归甲方，乙方由此造成的损失，按照乙方原始投资金额甲方给予补偿。</p>
                <p>4、租期届满，承租方有权优先签订续租(按当时合理价格)合同。</p>
                <p>5、租期届满，如乙方不再租赁，合同终止。</p>
                <p>八、违约责任：</p>
                <p>一方违约，由此给对方造成损失时，除向对方赔偿经济损失外，还应该按相关规定向对方承担违约责任。</p>
                <p>九、本合同如有未尽事宜，按国家相关法律法规处理。</p>
                <p>十、本合同一式三份，出租方、承租方、见证机关各执一份。</p>
                <h4>出租方：{{item.person}}</h4>
                <h4>签订日期：<span style="color:red">{{date.year}}年{{date.month}}月{{date.day}}</span></h4>
                <h4>承租方： {{renter}}</h4>
                <h4>签订日期：<span style="color:red">{{date.year}}年{{date.month}}月{{date.day}}</span></h4>
        </div>
        <h4 v-show="seeContract">请签名：</h4>
        <Sign v-show="seeContract"/>
         <el-checkbox v-show="seeContract" v-model="checked">请仔细阅读以上信息</el-checkbox>
      <span slot="footer" class="dialog-footer">
        <el-button v-show="seeContract" type="primary" size="small" @click="submit">确认</el-button>
        <el-button size="small" @click="cancel">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Sign from '@/components/sign'

export default {
  name: 'Contract',
  components: {
    Sign
  },
  props: {
    showModel: {
      type: Boolean
    },
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    seeContract: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    show: {
      get: function () {
        return this.showModel
      },
      set: function (v) {
        this.$emit('update:showModel', v)
      }
    },
    date () {
      let nowDate = new Date()
      let year = nowDate.getFullYear()
      let month = nowDate.getMonth() + 1 < 10 ? '0' + (nowDate.getMonth() + 1)
        : nowDate.getMonth() + 1
      let day = nowDate.getDate() < 10 ? '0' + nowDate.getDate() : nowDate
        .getDate()
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
      deadline: ''
    }
  },
  created () {
    this.deadline = this.getAfterNYear(this.date.dateStr, +this.item.years)
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
      var expriedYear = +(startdate.substring(0, 4)) + nextYear
      var expriedMonth = startdate.substring(4, 6)
      var expriedDay = startdate.substring(6)
      // 考虑二月份场景，若N年后的二月份日期大于该年的二月份的最后一天，则取该年二月份最后一天
      if (expriedMonth === '02' || expriedMonth === 2) {
        var monthEndDate = new Date(expriedYear, expriedMonth, 0).getDate()
        if (parseInt(expriedDay) > monthEndDate) { // 为月底时间
          // 取两年后的二月份最后一天
          expriedDay = monthEndDate
        }
      }
      return {
        expriedYear,
        expriedMonth,
        expriedDay
      }
    }
  }
}
</script>

<style></style>
