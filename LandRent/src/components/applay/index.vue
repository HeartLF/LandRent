
<template>
    <div class="pay" v-loading="loading">
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
    let landId = this.$route.query.id
    this.$http.post('/order/pay', {
      'userId': +localStorage.getItem('useId'),
      landId
    }).then(res => {
      document.write(res.data)
    })
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
  }
}
</script>

<style scoped>
.pay{
  width: 100%;
  height: 100%;
}
</style>
