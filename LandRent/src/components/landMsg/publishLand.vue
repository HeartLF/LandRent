<template>
  <div>
    <h2 style="padding:10px 10px;color:#ff9f00">已发布土地信息</h2>
    <Table
        ref="tableList"
        :tableColumns="tableLabel"
        :page="page"
        :rows="rows"
        :total="total"
        :loading="loading"
        :tableOption="tableOption"
         sourceUrl="/land/userAllLand"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        @sortChange="sortChange"
      ></Table>
      <contractDialog  :showModel.sync="show"/>
  </div>

</template>

<script>
import Table from '@/components/table'
import contractDialog from '@/components/contractDialog'
export default {
  components: {
    Table,
    contractDialog
  },
  data () {
    return {
      show: true,
      info: {},
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
            label: '删除',
            type: 'danger',
            icon: 'el-icon-delete',
            methods: 'del',
            ishow: true
          },
          {
            label: '修改土地信息',
            type: 'primary',
            methods: 'edit',
            ishow: true
          }
        ]
      }
    }
  },
  methods: {
    getTableData () {
      this.$http.post('/land/userAllLand', {
        userId: +localStorage.getItem('useId')
      }).then(res => {
        let {data} = res
        if (data.state === 1) {
          this.tableData = data.data
        }
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
    del (val) {
      // 我是删除
      this.$confirm('确定要删除该土地吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post('/land/delById', {
          landId: val.id
        }).then(res => {
          if (res.data.state === 1) {
            this.loading = true
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
    edit (val) {
      this.$router.push({
        name: 'MsgStep',
        query: {
          landId: val.id
        }
      })
    }
  }
}
</script>

<style>

</style>
