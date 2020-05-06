<template>
  <div>
      <el-form style="margin-top:20px" ref="form" :model="form" label-width="100px">
        <el-form-item label="选择地区：" style="font-size:16px;font-weight: bold">
          <el-radio-group v-model="form.region">
            <el-radio style="margin-left:0px;margin-bottom:10px" v-for="(item,index) in allCity" :key="index"   :label="item.name"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用途:" style="font-size:16px;font-weight: bold">
          <el-radio-group v-model="form.type">
            <el-radio  label="" >全部</el-radio>
            <el-radio  label="耕地" >耕地</el-radio>
            <el-radio  label="园地" >园地</el-radio>
            <el-radio  label="林地" >林地</el-radio>
            <el-radio  label="草地" >草地</el-radio>
            <el-radio  label="农房" >农房</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="面积范围:" style="font-size:16px;font-weight: bold">
          <el-radio-group v-model="form.area" >
            <el-radio  label="">全部</el-radio>
            <el-radio  label="1~10" >10亩以下</el-radio>
            <el-radio  label="10~100" >10-100亩</el-radio>
            <el-radio  label="101~1000" >101~1000亩</el-radio>
            <el-radio  label="1001~5000" >1001~5000亩</el-radio>
            <el-radio  label="5000~999999999" >5000亩以上</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="流转年限:" style="font-size:16px;font-weight: bold">
          <el-radio-group v-model="form.years">
            <el-radio  label="" >全部</el-radio>
            <el-radio  label="1~6" >6年以下</el-radio>
            <el-radio  label="6~10" >6~10年</el-radio>
            <el-radio  label="11~15" >11~15年</el-radio>
            <el-radio  label="16~20" >16~20年</el-radio>
            <el-radio  label="21~30" >21~30年</el-radio>
            <el-radio  label="31~40" >31~40年</el-radio>
            <el-radio  label="41~50" >41~50年</el-radio>
            <el-radio  label="50~999999" >50以上年</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div>
        <Content :list="list"/>
        <div style="margin:10px 20px;text-align:center">
            <!-- 翻页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageNum"
            :page-sizes="[12, 16, 20, 24]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>

      </div>
      <div class="main">
        <h3>热门地区土地信息</h3>
        <div>
          <span class="item" v-for="(item,index) in hotCity" :key="index" @click="handClick(item)">{{item.name}}</span>
        </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Content from '@/components/content'
import Footer from '@/components/footer'
const city = [
  {
    name: '全部'
  },
  {
    'code': '11',
    'name': '北京市'
  },
  {
    'code': '12',
    'name': '天津市'
  },
  {
    'code': '13',
    'name': '河北省'
  },
  {
    'code': '14',
    'name': '山西省'
  },
  {
    'code': '15',
    'name': '内蒙古自治区'
  },
  {
    'code': '21',
    'name': '辽宁省'
  },
  {
    'code': '22',
    'name': '吉林省'
  },
  {
    'code': '23',
    'name': '黑龙江省'
  },
  {
    'code': '31',
    'name': '上海市'
  },
  {
    'code': '32',
    'name': '江苏省'
  },
  {
    'code': '33',
    'name': '浙江省'
  },
  {
    'code': '34',
    'name': '安徽省'
  },
  {
    'code': '35',
    'name': '福建省'
  },
  {
    'code': '36',
    'name': '江西省'
  },
  {
    'code': '37',
    'name': '山东省'
  },
  {
    'code': '41',
    'name': '河南省'
  },
  {
    'code': '42',
    'name': '湖北省'
  },
  {
    'code': '43',
    'name': '湖南省'
  },
  {
    'code': '44',
    'name': '广东省'
  },
  {
    'code': '45',
    'name': '广西壮族自治区'
  },
  {
    'code': '46',
    'name': '海南省'
  },
  {
    'code': '50',
    'name': '重庆市'
  },
  {
    'code': '51',
    'name': '四川省'
  },
  {
    'code': '52',
    'name': '贵州省'
  },
  {
    'code': '53',
    'name': '云南省'
  },
  {
    'code': '54',
    'name': '西藏自治区'
  },
  {
    'code': '61',
    'name': '陕西省'
  },
  {
    'code': '62',
    'name': '甘肃省'
  },
  {
    'code': '63',
    'name': '青海省'
  },
  {
    'code': '64',
    'name': '宁夏回族自治区'
  },
  {
    'code': '65',
    'name': '新疆维吾尔自治区'
  },
  {
    'code': '71',
    'name': '台湾省'
  },
  {
    'code': '81',
    'name': '香港特别行政区'
  },
  {
    'code': '82',
    'name': '澳门特别行政区'
  }
]
export default {
  name: 'Land',
  components: {
    Content,
    Footer
  },
  data () {
    return {
      count: 0,
      form: {
        'region': '全部',
        'type': '',
        'area': '',
        'years': ''
      },
      allCity: city,
      hotCity: city,
      list: [],
      pageNum: 1,
      total: 0,
      pageSize: 12
    }
  },
  computed: {
    test () {
      return this.$route.query.key
    },
    region () {
      return this.form.region
    },
    type () {
      return this.form.type
    },
    area () {
      return this.form.area
    },
    years () {
      return this.form.years
    }
  },
  watch: {
    form: {
      async handler (val) {
        if (!this.count) {
          this.search(this.test)
        } else {
          this.getByLabel(val)
        }
        this.count++
      },
      immediate: true,
      deep: true
    },
    test: {
      handler (val) {
        this.search(val)
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    console.log(this.$route)
    // this.$http.get('/static/city.json').then(res => {
    //   this.allCity = res.data
    //   this.hotCity = res.data.slice(Math.floor(Math.random() * 10))
    //   this.allCity.unshift({
    //     name: '全部'
    //   })
    // })
    if (this.$route.query.key) {
      this.search(this.test)
    } else {
      this.getByLabel(this.form)
    }
  },
  mounted () {

  },
  methods: {
    async getByLabel (val) {
      const loading = this.$loading({
        lock: true,
        text: '正在加载中'
        // spinner: 'el-icon-loading',
        // background: 'rgba(0, 0, 0, 0.7)'
      })
      let regin = val.region
      if (regin === '全部') {
        regin = null
      }
      const result = await this.$http.post('/land/getByLabel', {
        'pageSize': this.pageSize,
        'pageNum': this.pageNum,
        'region': regin || null,
        'type': val.type ? val.type : null,
        'area': val.area ? val.area.split('~').map(Number) : null,
        'years': val.years ? val.area.split('~').map(Number) : null
      })
      if (result) {
        const {data} = result
        this.list = data.content
        this.total = data.totalSize

        loading.close()
      }
    },
    async handClick (item) {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
      this.form.region = item.name
    },
    async search (key) {
      const result = await this.$http.post('/land/findLand', {
        key
      })
      const {data} = result
      this.list = data.data
    },
    // 切换当前一页展示多少条
    handleSizeChange (val) {
      this.pageSize = val
      this.getByLabel(this.form)
    },
    // 翻页
    handleCurrentChange (val) {
      this.pageNum = val
      this.getByLabel(this.form)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  border 1px solid #eee
  h3
    margin 10px 10px
  .item
    min-width 110px
    display inline-block
    margin 10px 10px
    text-align left
    &:hover
      cursor pointer
      color #ff9f00
</style>
