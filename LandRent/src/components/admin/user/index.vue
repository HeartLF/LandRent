<template>
  <div>
    <h2 style="padding:10px 10px;color:#ff9f00;text-align:left">全部订单</h2>
    <Table
        ref="tableList"
        :tableData="tableData"
        :tableColumns="tableLabel"
        :page="page"
        :rows="rows"
        :total="total"
        :loading="loading"
        :flag='false'
        :tableOption="tableOption"
        sourceUrl="/user/allUser"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        @sortChange="sortChange"
      ></Table>
      <userDialog :ruleForm="ruleForm" :showModel.sync="show"/>
  </div>

</template>

<script>
import Table from '@/components/table'
import userDialog from './userDialog'
export default {
  components: {
    Table,
    userDialog
  },
  data () {
    return {
      show: false,
      ruleForm: {},
      loading: true,
      page: 1,
      rows: 20,
      total: 100,
      // 表头数据
      tableLabel: [
        {
          label: 'useId',
          param: 'id'
        },
        {
          label: '姓名',
          param: 'name'
        },
        {
          label: '手机号',
          param: 'phone'
        },
        {
          label: '身份证号',
          param: 'idNumber'
        }
      ],
      tableOption: {
        label: '操作',
        options: [
          {
            label: '修改',
            type: 'primary',
            methods: 'update',
            ishow: true
          },
          {
            label: '注销',
            type: 'primary',
            methods: 'cancellation',
            ishow: true
          }
        ]
      },
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
    },
    update (val) {
      this.show = true
      console.log(val)
      this.ruleForm = val
      // let orderId = val.id
    },
    cancellation (val) {
      let userId = val.id
      this.$confirm('确定注销该账户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post('/user/delUser', {
          userId
        }).then(res => {
          if (res.data.state === 1) {
            this.loading = true
            this.$refs.tableList.getTableData()
            this.$message({
              type: 'success',
              message: '注销成功!'
            })
          } else {
            this.$message({
              type: 'error',
              message: `${res.data.message}`
            })
          }
        })
      })
    }
  }
}
</script>

<style>

</style>
