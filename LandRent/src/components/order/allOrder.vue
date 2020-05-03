<template>
  <div>
    <h2 style="padding:10px 10px;color:#ff9f00">全部订单</h2>
    <Table
        ref="tableList"
        :tableData="tableData"
        :tableColumns="tableLabel"
        :page="page"
        :rows="rows"
        :total="total"
        :loading="loading"
        sourceUrl="/order/getAllOrder"
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
      // 表格数据
      tableData: []
    }
  },
  mounted () {
    console.log(this.$refs.tableList)
    // this.$refs.tableList.getTableData()
    // this.getTableData()
  },
  methods: {
    // getTableData () {
    //   this.$http.post('/order/getAllOrder', {
    //     'userId': +localStorage.getItem('useId')
    //   }).then(res => {
    //     console.log(res.data)
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
    }
  }
}
</script>

<style>

</style>
