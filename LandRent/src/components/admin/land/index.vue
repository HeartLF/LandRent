<template>
  <div>
    <h2 style="padding:10px 10px;color:#ff9f00;text-align:left">待审核土地信息</h2>
    <Table
        ref="tableList"
        :tableColumns="tableLabel"
        :page="page"
        :rows="rows"
        :total="total"
        :loading="loading"
        :tableOption="tableOption"
        :flag='false'
        sourceUrl="/land/uncheckedLand"
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
          label: 'id',
          param: 'id'
        },
        {
          label: '姓名',
          param: 'person'
        },
        {
          label: '地址',
          param: 'region'
        },
        {
          label: '详细地址',
          param: 'address'
        },
        {
          label: '面积',
          param: 'area'
        },
        {
          label: '价格/亩',
          param: 'price'
        },
        {
          label: '标题',
          param: 'title'
        }
      ],
      // 表格操作
      tableOption: {
        label: '操作',
        options: [
          {
            label: '审核',
            type: 'primary',
            methods: 'checked',
            ishow: true
          }
        ]
      }
    }
  },
  methods: {
    // getTableData () {
    //   this.$http.post('/land/userAllLand', {
    //     userId: +localStorage.getItem('useId')
    //   }).then(res => {
    //     let {data} = res
    //     if (data.state === 1) {
    //       this.tableData = data.data
    //       console.log(data)
    //     }
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
    checked (val) {
      // 我是删除
      let landId = val.id
      this.$confirm('确定审核该土地?', '提示', {
        confirmButtonText: '通过',
        cancelButtonText: '不通过',
        type: 'warning'
      }).then(() => {
        this.$http.post('/land/checkLand', {
          'landId': landId,
          'result': true
        }).then(res => {
          if (res.data.state === 1) {
            this.loading = true
            this.$refs.tableList.getTableData()
            this.$message({
              type: 'success',
              message: '审核成功!'
            })
          } else {
            this.$message({
              type: 'error',
              message: `${res.data.message}`
            })
          }
        })
      }).catch(() => {
        this.$http.post('/land/checkLand', {
          landId,
          'result': false
        }).then(res => {
          if (res.data.state === 1) {
            this.loading = true
            this.$refs.tableList.getTableData()
            this.$message({
              type: 'success',
              message: '审核不成功!'
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
