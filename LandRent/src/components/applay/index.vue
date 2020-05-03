
<template>
    <div class="pay" >
    </div>
</template>

<script>

export default {
  data () {
    return {
      apply: '',
      loading: true
    }
  },
  created () {
    let landId = +this.$route.query.id
    let tradeId = this.$route.query.out_trade_no
    if (landId) {
      this.orderPay(landId)
    } else {
      this.orderRepay(tradeId)
    }
    // this.$http.post('/order/pay', {
    //   'userId': +localStorage.getItem('useId'),
    //   landId
    // }).then(res => {
    //   document.write(res.data)
    // })
  }, // recharge(obj).then(response => {
  //   if (response.data.status !== 200) {
  //     return this.tipWarning(response.data.msg)
  //   }
  //   this.loading = false
  //   this.payUrl = response.data.data.url
  //   document.write(this.payUrl)
  // }).catch((error) => {
  //   console.log(error)
  //   this.loading = false
  // })

  mounted () {

  },
  methods: {
    orderPay (landId) {
      const loading = this.$loading({
        lock: true,
        text: '正在加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.$http.post('/order/pay', {
        'userId': +localStorage.getItem('useId'),
        landId
      }).then(res => {
        loading.close()
        document.write(res.data)
      })
    },
    orderRepay (tradeId) {
      const loading = this.$loading({
        lock: true,
        text: '正在加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.$http.post('/order/rePay', {
        'out_trade_no': tradeId
      }).then(res => {
        loading.close()
        document.write(res.data)
      })
    }
  }
}
</script>

<style scoped>
.pay{
  width: 100%;
  height: 100%;
}
</style>
