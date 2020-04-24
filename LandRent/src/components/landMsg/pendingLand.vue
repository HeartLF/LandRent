<template>
  <div>
    <h2 style="padding:10px 10px;color:#ff9f00">待审核土地信息</h2>
    <Table
        :tableData="tableData"
        :tableColumns="tableLabel"
        :page="page"
        :rows="rows"
        :total="total"
        :loading="loading"
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
      loading: false,
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
            methods: 'del'
          }
        ]
      },
      // 表格数据
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: 0
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          sex: 1
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          sex: 0
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          sex: 1
        }
      ]
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
          console.log(data)
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
      console.log(val)
    }
  }
}
</script>

<style>

</style>
