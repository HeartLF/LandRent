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
      </div>
      <div class="main">
        <h3>热门地区土地信息</h3>
        <div>
          <span class="item" v-for="(item,index) in hotCity" :key="index">{{item.name}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import Content from '@/components/content'
export default {
  name: 'Land',
  components: {
    Content
  },
  data () {
    return {
      form: {
        'region': '',
        'type': '',
        'area': '',
        'years': ''
      },
      allCity: '',
      hotCity: '',
      list: []
    }
  },
  watch: {
    form: {
      async handler (val) {
        // console.log(yearsItem, areaItem)

        const result = await this.$http.post('/land/getByLabel', {
          'region': val.region ? val.region : null,
          'type': val.type ? val.type : null,
          'area': val.area ? val.area.split('~').map(Number) : null,
          'years': val.years ? val.area.split('~').map(Number) : null
        })
        if (result) {
          const {data} = result
          this.list = data.content
        }
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    this.$http.get('/static/city.json').then(res => {
      this.allCity = res.data
      this.hotCity = res.data.slice(Math.floor(Math.random() * 10))
    })
  },
  methods: {
    async getByLabel (params) {
      const result = await this.$http.post('/land/getByLabel', {
        ...params
      })
      if (result) {
        const {data} = result
        console.log(data)
      }
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
