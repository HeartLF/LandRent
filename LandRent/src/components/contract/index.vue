<template>
  <div>
    <el-dialog title="土地租赁合同" :visible.sync="show">
        <div  ref="imageTofile">
                <h4>甲方：(出租方)</h4>
                <h4>乙方：(承租方)</h4>
                <p>根据相关法律、法规、政策规定，就乙方租赁甲方土地事宜，经双方协商一致，现签订如下协议，以便共同遵守：</p>
                <p>一、合同标的：租赁土地(土地性质为国有)共 亩。土地位于：</p>
                <p>二、租赁期限：租赁期限 年，(自 _____年 _____月____ 日起至____ 年____ 月 ____日止)。</p>
                <p>三、租赁价款及付款办法：十年一次性支付_______元(____________)。</p>
                <p>四、租赁用途：由乙方自主使用。</p>
                <p>五、甲方的权利义务：</p>
                <p>1、拥有土地所有权，但不涉及乙方区域内规划等工作。在合同期内甲方应尊重乙方的生产经营自主权，不得干涉乙方正常的经营活动。</p>
                <p>2、负责协调处理乙方与甲方及周边土地的关系，以维护乙方对该地的正常使用。</p>
                <p>3、除收取租赁费以外，不再收取任何款项。</p>
                <p>六、乙方的权利和义务：</p>
                <p>1、在租赁期内，拥有租赁土地的使用权。</p>
                <p>2、一次性支付甲方———年租金。</p>
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
                <p>出租方：</p>
                <p>签订日期： _______年____ __月____ __日</p>
                <p>承租方： </p>
                <p>签订日期： _______年____ __月____ __日</p>
        </div>
        <h4>请签名：</h4>
        <Sign/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="submit">确认</el-button>
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
    }
  },
  data () {
    return {
      //   dialogTableVisible: true
      src: ''
    }
  },
  methods: {
    submit () {
    },
    cancel () {
      this.$emit('update:showModel', false)
    }
  }
}
</script>

<style></style>
