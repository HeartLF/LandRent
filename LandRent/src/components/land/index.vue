<template>
  <div>
      <el-form style="margin-top:20px" ref="form" :model="form" label-width="100px">
        <el-form-item label="选择地区：">
          <el-radio-group v-model="form.resource">
            <el-radio style="margin-left:0px;margin-bottom:10px" v-for="(item,index) in allCity" :key="index" border  :label="item.name"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用途:">
          <el-radio-group v-model="form.type">
            <el-radio  label="全部" border>全部</el-radio>
            <el-radio  label="耕地" border>耕地</el-radio>
            <el-radio  label="园地" border>园地</el-radio>
            <el-radio  label="林地" border>林地</el-radio>
            <el-radio  label="草地" border>草地</el-radio>
            <el-radio  label="农房" border>农房</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div>
        <Content/>
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
        resource: '全部',
        type: '全部'
      },
      allCity: '',
      hotCity: ''
    }
  },
  created () {
    this.$http.get('/static/city.json').then(res => {
      this.allCity = res.data
      this.allCity.unshift({
        name: '全部'
      })
      this.hotCity = res.data.slice(Math.floor(Math.random() * 10))
      console.log(this.hotCity)
    })
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
