<template>
  <div>
    <h2 style="padding:10px 10px;color:#ff9f00">全部订单</h2>
    <Table
        :tableData="tableData"
        :tableColumns="tableLabel"
        :page="page"
        :rows="rows"
        :total="total"
        :loading="loading"
         sourceUrl="/order/getInvalidOrder"
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
          param: 'id'
        },
        {
          label: '创建时间',
          param: 'createTime',
          render: row => {
            let time = new Date().getTime()
            let date = new Date(time)
            return date.toLocaleString()
          }
        },
        {
          label: '支付时间',
          param: 'paytime',
          render: row => {
            let time = new Date().getTime()
            let date = new Date(time)
            return date.toLocaleString()
          }
        },
        {
          label: '支付金额',
          param: 'payment'
        },
        {
          label: '支付宝流水号',
          param: 'tradeNO'
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
      // 表格数据
      tableData: []
    }
  },
  created () {
    // this.getTableData()
  },
  methods: {
    getTableData () {
      this.$http.post('/order/getInvalidOrder', {
        'userId': +localStorage.getItem('useId')
      }).then(res => {
        this.tableData = res.data.data
      })
    },
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
    delOrder (val) {
      // 我是删除
      this.$confirm('确定取消订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post('/order/cancle', {
          orderId: ''
        }).then(res => {
          if (res.data === 1) {
            this.getTableData()
            this.$message({
              type: 'success',
              message: '取消成功!'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    refund (val) {
      this.$confirm('确定要退款?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post('/order/refund', {
          orderId: ''
        }).then(res => {
          if (res.data === 1) {
            this.$message({
              type: 'success',
              message: '取消成功!'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style>

</style>
