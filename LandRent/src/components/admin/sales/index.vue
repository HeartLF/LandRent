<template>
  <div>
    <div ref="main" id="main" style="width:600px;height:500px;"></div>
    <div ref="circle"  style="width:600px;height:500px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Table from '@/components/table'
import contractDialog from '@/components/contractDialog' // 引入echarts中国地图数据
require('echarts/map/js/china')
export default {
  components: {
    Table,
    contractDialog
  },
  data () {
    return {
      dateArray: []
    }
  },
  mounted () {
    this.getBeforeDate()
    this.getBardata()
    this.getCircleData()
    // 挂载完毕后进行初始化地图数据

    // 指定图表的配置项和数据

    // 使用刚指定的配置项和数据显示图表。
  },
  methods: {
    getBeforeDate (n) {
      var myDate = new Date() // 获取今天日期
      myDate.setDate(myDate.getDate() - 7)
      var dateTemp
      var flag = 1
      for (var i = 0; i < 7; i++) {
        dateTemp = myDate.getMonth() + 1 + '-' + myDate.getDate()
        this.dateArray.push(dateTemp)
        myDate.setDate(myDate.getDate() + flag)
      }
    },
    async getBardata () {
      var myChart = echarts.init(this.$refs.main)
      let result = await this.$http.post('/order/weekSales')
      if (result.data.state === 1) {
        var option = {
          title: {
            text: '土地前7天销量',
            left: 'center'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            type: 'category',
            data: this.dateArray
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: result.data.data,
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            }
          ]
        }
        myChart.setOption(option)
      } else {
        this.$message.error(`${result.data.message}`)
      }
    },
    async getCircleData () {
      var myChart = echarts.init(this.$refs.circle)
      let result = await this.$http.post('/order/SalesByType')
      if (result.data.state === 1) {
        let arr = []
        let data = result.data.data
        for (const key in data) {
          arr.push({
            name: key,
            value: data[key]
          })
        }
        console.log(arr)
        var option = {
          title: {
            text: '土地类型销售情况',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耕地', '林地', '农场', '农家乐']
          },
          series: [
            {
              name: '销售情况',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: arr,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option)
      } else {
        this.$message.error(`${result.data.message}`)
      }
    }
  }

}
</script>

<style></style>
