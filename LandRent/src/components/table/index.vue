<template>
<div class="table">
    <!-- 表格开始 -->
    <el-table
      ref="table"
      v-loading="vLoading"
      element-loading-text="加载中"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      @sort-change="handleSortChange"
    >
      <!-- prop是对应列内容的字段名 width是对应列宽度 sortable是是否排序 label是对应列名称 -->
      <el-table-column
        v-for="(item, index) in tableColumns"
        :key="index"
        :prop="item.param"
        :width="item.width ? item.width : ''"
        :sortable="item.sortable ? true : false"
        :label="item.label"
      >
      <!-- 因为有些参数需要判定比如性别所以判断一下 -->
        <template slot-scope="scope">
          <span v-if="item.render">
            {{ item.render(scope.row) }}
          </span>
          <span v-else>{{ scope.row[item.param] }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="倒计时"
        align="center"
        width="100"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          {{countdown(scope.row)}}
        </template>
      </el-table-column> -->
      <!-- 操作 -->
      <el-table-column
        v-if="tableOption.label"
        :label="tableOption.label"
        align="center"
        width="300"
        fixed="right"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(item, index) in tableOption.options"
            :key="index"
            :type="item.type"
            :icon="item.icon"
            @click="handleButton(item.methods, scope.row, scope.$index)"
            size="mini"
          >
            {{ item.label }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格结束 -->
    <!-- 翻页 -->
    <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="rows"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination> -->
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      // 预加载
      type: Boolean,
      default: true
    },
    flag: {
      type: Boolean,
      default: true
    },
    params: {
      type: Object,
      default: () => {
        return {}
      }
    },
    sourceUrl: {
      type: String,
      default: ''
    },
    tableColumns: {
      // 表头数据
      type: Array,
      default: () => {
        return []
      }
    },
    tableOption: {
      // 表格操作
      type: Object,
      default: () => {
        return {}
      }
    },
    page: {
      // 当前页
      type: Number,
      default: () => {
        return 1
      }
    },
    rows: {
      // 当前页展示数
      type: Number,
      default: () => {
        return 20
      }
    },
    total: {
      // 总数
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  data () {
    return {
      count: 0,
      tableData: [],
      vLoading: this.loading
    }
  },
  created () {
    this.getTableData()
  },
  methods: {
    getTableData () {
      this.vLoading = true
      if (!this.flag) {
        this.$http.post(this.sourceUrl).then(res => {
          if (res && res.data.state === 1) {
            this.tableData = res.data.data
            this.vLoading = false
          } else {
            this.$message({
              type: 'error',
              message: `${res.data.message}`
            })
          }
        })
      } else {
        this.$http.post(this.sourceUrl, {
          ...this.params,
          userId: +localStorage.getItem('useId')
        }).then(res => {
          if (res && res.data.state === 1) {
            this.tableData = res.data.data
            this.vLoading = false
          } else {
            this.$message({
              type: 'error',
              message: `${res.data.message}`
            })
          }
        })
      }
    },
    // 切换当前一页展示多少条
    handleSizeChange (val) {
      this.$emit('sizeChange', val)
    },
    // 翻页
    handleCurrentChange (val) {
      this.$emit('pageChange', val)
    },
    // 按钮点击事件
    // methods方法名 row当前点击列数据 index当前点击的index
    handleButton (methods, row, index) {
      this.$emit('clickButton', { methods: methods, row: row, index: index })
    },
    // 点击排序
    handleSortChange (val) {
      this.$emit('sortChange', val)
    }
    // countdown (count) {
    //   let
    //   let timer = setInterval(() => {
    //     count--
    //   }, 1000)
    //   if (count === 5) {
    //     clearInterval(timer)
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>
// .table {
//   margin-top: 10px;
// }
// .el-table {
//   margin: 10px 0;
//   & td,
//   & th {
//     text-align: center;
//   }
// }
// .el-pagination {
//   text-align: right;
// }
</style>
