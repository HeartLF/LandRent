<template>
  <div>
    <h2 style="padding:10px 10px;color:#ff9f00">已支付订单</h2>
    <Table
        ref="tableList"
        :tableData="tableData"
        :tableColumns="tableLabel"
        :page="page"
        :rows="rows"
        :total="total"
        :loading="loading"
        :tableOption="tableOption"
        sourceUrl="/order/getSuccessOrder"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        @sortChange="sortChange"
      ></Table>
          <!-- <ContractDialog :item="list"  :showModel.sync="show"/> -->
  </div>

</template>

<script>
import Content from '@/components/content'
import Table from '@/components/table'
export default {
  components: {
    Table,
    Content
  },
  data () {
    return {
      show: false,
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
            // let time = new Date().getTime()
            let date = new Date(row.createTime)
            return date.toLocaleString()
          }
        },
        {
          label: '支付时间',
          param: 'payTime',
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
          param: 'tradeNo'
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
            label: '退款',
            type: 'danger',
            icon: 'el-icon-delete',
            methods: 'refundOrder'
          },
          {
            label: '查看合同',
            type: 'primary',
            methods: 'handClick'
          }
        ]
      },
      // 表格数据
      tableData: []
    }
  },
  methods: {
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
    refundOrder (val) {
      // 我是删除
      let orderId = val.id
      this.$confirm('确定要退款?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading = false
        this.$http.post('/order/refund', {
          orderId
        }).then(res => {
          console.log(res)
          if (res.data.state === 1) {
            // this.$refs.tableList.getTableData()
            this.$message({
              type: 'success',
              message: '退款成功'
            })
          } else {
            this.$message({
              type: 'error',
              message: `${res.data.message}`
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
    handClick () {
      this.show = true
    }
  }
}
</script>

<style>

</style>
