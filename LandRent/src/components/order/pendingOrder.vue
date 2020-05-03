<template>
  <div>
    <h2 style="padding:10px 10px;color:#ff9f00">待支付订单</h2>
    <Table
        ref="tableList"
        :tableData="tableData"
        :tableColumns="tableLabel"
        :page="page"
        :rows="rows"
        :total="total"
        :loading="loading"
        sourceUrl="/order/getUnpaidOrderByUId"
        :tableOption="tableOption"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        @sortChange="sortChange"
      ></Table>
  </div>

</template>

<script>
import Table from '@/components/table'
export default {
  components: {
    Table
  },
  data () {
    return {
      loading: true,
      page: 1,
      rows: 20,
      total: 100,
      // 表头数据
      tableLabel: [
        {
          label: '订单编号',
          param: 'id',
          width: '200'
        },
        {
          label: '创建时间',
          param: 'createTime',
          width: '200',
          render: row => {
            let date = new Date(row.createTime)
            return date.toLocaleString()
          }
        },
        {
          label: '支付时间',
          param: 'payTime',
          width: '200',
          render: row => {
            // let time = new Date().getTime()
            let date = new Date(row.payTime)
            return date.toLocaleString()
          }
        },
        {
          label: '支付金额',
          param: 'payment'
        },
        {
          label: '支付宝流水号',
          param: 'tradeNo',
          width: '200'
        },
        {
          label: '订单状态',
          param: 'status',
          render: row => {
            if (row.status === 0) {
              return '待付款'
            } else if (row.status === 1) {
              return '已付款'
            } else {
              return '已退款'
            }
          }
        }
      ],
      // 表格操作
      tableOption: {
        label: '操作',
        options: [
          {
            label: '重新支付',
            type: 'primary',
            methods: 'repayment',
            ishow: true
          },
          {
            label: '查看合同',
            type: 'primary',
            methods: 'toContract',
            ishow: true
          },
          {
            label: '取消订单',
            type: 'primary',
            methods: 'cancelOrder',
            ishow: true
          }
        ]
      },
      // 表格数据
      tableData: []
    }
  },
  created () {
    // this.getTableData()
  },
  methods: {
    // getTableData () {
    //   this.$http.post('/order/getUnpaidOrderByUId', {
    //     'userId': +localStorage.getItem('useId')
    //   }).then(res => {
    //     this.tableData = res.data.data
    //   })
    // },
    // 切换当前一页展示多少条
    sizeChange (val) {
      this.rows = val
      console.log(`每页 ${val} 条`)
    },
    // 翻页
    pageChange (val) {
      this.page = val
      console.log(`当前页: ${val}`)
    },
    // 点击事件
    clickButton (val) {
      // 调用事件
      this[val.methods](val.row)
    },
    // 排序
    sortChange (val) {
      console.log(val)
    },
    cancelOrder (val) {
      // 我是删除
      let orderId = val.id
      this.$confirm('确定取消订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post('/order/cancle', {
          orderId
        }).then(res => {
          if (res.data.state === 1) {
            // this.loading = true
            this.$refs.tableList.getTableData()
            this.$message({
              type: 'success',
              message: '取消成功!'
            })
          } else {
            this.$message({
              type: 'error',
              message: `${res.data.message}`
            })
          }
        })
      })
    },
    repayment (val) {
      this.$confirm('确定要重新支付吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({
          name: 'applay',
          query: {
            out_trade_no: val.id
          }
        })
        // this.$http.post('/order/rePay', {
        //   out_trade_no: val.id
        // }).then(res => {
        //   if (res.data.state === 1) {
        //     this.$router.push({
        //       name: 'applay',
        //       query: {
        //         out_trade_no: this.item.id
        //       }
        //     })
        //     this.getTableData()
        //     this.$message({
        //       type: 'success',
        //       message: '取消成功!'
        //     })
        //   }
        // })
      })
    },
    toContract (val) {
      this.$router.push({
        name: 'contractItem',
        query: {
          landId: val.landId,
          createTime: val.createTime
        }
      })
    }
  }
}
</script>

<style>

</style>
