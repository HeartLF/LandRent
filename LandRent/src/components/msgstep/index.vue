<template>
<div>
    <el-steps :active="active"  style="margin-top: 20px">
        <el-step title="选择土地类型" icon="el-icon-document-checked">
        </el-step>
        <el-step title="填写土地详情" icon="el-icon-edit">
        </el-step>
        <el-step title="完成" icon="el-icon-circle-check">
        </el-step>
    </el-steps>
    <div class="main">
        <div class="type" v-show="showType">
            <h6>选择土地分类</h6>
            <div class="radio">
                <el-radio v-model="type" label="耕地" border>耕地</el-radio>
                <el-radio v-model="type" label="农场" border>农场</el-radio>
                <el-radio v-model="type" label="林地" border>林地</el-radio>
                <el-radio v-model="type" label="农家乐" border>农家乐</el-radio>
                <el-radio v-model="type" label="宅基地" border>宅基地</el-radio>
            </div>
            <div class="nextbtn">
                <el-button class="btn" @click="nextBtn">下一步</el-button>
            </div>
        </div>
        <div class="content"  v-show="showContent">
            <div class="form">
                <el-form ref="form" :rules="rules" :model="form"  label-width="100px">
                    <el-form-item label="所在地区"  >
                         <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
                    </el-form-item>
                    <el-form-item label="详细地址" prop="address" >
                        <el-input v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="土地面积" prop="area" >
                        <el-input v-model="form.area"></el-input>
                    </el-form-item>
                    <el-form-item label="金额" prop="price" >
                        <el-input v-model="form.price"></el-input>
                    </el-form-item>
                    <el-form-item label="使用年限" prop="years" >
                        <el-input v-model="form.years"></el-input>
                    </el-form-item>
                    <el-form-item label="上传图片" >
                        <el-upload
                            action="landImage/upload"
                            list-type="picture-card"
                            :on-success="handleImageSuccess"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">最多上传6张，单张照片最大4MB，支持：PG/JPEG/GIF/PNG格式</div>
                        </el-upload>
                        <!-- <el-dialog :visible.sync="dialogVisible"> -->
                            <img width="100%" :src="dialogImageUrl" alt="">
                        <!-- </el-dialog> -->
                    </el-form-item>
                    <el-form-item label="信息标题" prop="title" >
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="土地详情" prop="description" >
                        <el-input type="textarea" placeholder="可输入土地状况、价值说明、对融资者的要求等信息" v-model="form.description"></el-input>
                    </el-form-item>
                    <el-form-item label="土地联系人" prop="person" >
                        <el-input v-model="form.person"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人电话" prop="phone" >
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="图形验证码" prop="imageCode" >
                        <el-input  v-model="form.imageCode"></el-input>
                        <img @click="changeImage" style="width: 100px; height: 50px;margin-top:5px" :src="src" fit="scale-down"/>
                    </el-form-item>
                    <el-form-item label="验证码" prop="phoneCode" >
                        <el-input v-model="form.phoneCode"></el-input>
                        <el-button style="margin-top:10px" icon="el-icon-mobile-phone" @click="send" type="success" :disabled="disabled=!show">
                    <span v-show="show">获取验证码</span>
                    <span v-show="!show">{{count}} s</span>
                </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn" @click="beforeBtn">上一步</el-button>
                        <el-button class="btn"  @click="onSubmit('form')">立即发布</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="finish" v-show="showFinish">
            <div class="msg">
                <i  :class="[showIcon?'el-icon-success ':'el-icon-error col']"></i>
                <p>{{title}}</p>
                <el-button class="btn" @click="beforeBtn">上一步</el-button>
            </div>

        </div>
    </div>
</div>

  <!-- <el-steps :active="1" align-center>
    <el-step title="步骤1" >
        <template slot="description">
             <div>3333333333333</div>
         </template>
    </el-step>
    <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps> -->
</template>

<script>

import { regionData, CodeToText } from 'element-china-area-data'
const TIME_COUNT = 60 // 更改倒计时时间
export default {
  name: 'MsgSteps',
  data () {
    return {
      show: true, // 初始启用按钮
      count: '', // 初始化次数
      active: 1,
      type: '',
      title: '信息发布成功',
      showType: true,
      showContent: false,
      showFinish: false,
      showIcon: true,
      fileArray: '',
      form: {
        region: '',
        address: '',
        area: '',
        price: '',
        title: '',
        years: '',
        description: '',
        person: '',
        phone: '',
        imageCode: '',
        phoneCode: ''
      },
      rules: {
        region: [
          { required: true, message: '请选择地址', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请输入面积', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入信息标题', trigger: 'blur' }
        ],
        years: [
          { required: true, message: '请输入年限', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入描述', trigger: 'blur' }
        ],
        person: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        imageCode: [
          { required: true, message: '请输入图片验证码', trigger: 'blur' }
        ],
        phoneCode: [
          { required: true, message: '请输入信息验证码', trigger: 'blur' }
        ]
      },
      options: regionData,
      selectedOptions: [],
      dialogImageUrl: '',
      dialogVisible: false,
      src: '',
      fileList: []
    }
  },
  computed: {
    params () {
      return {
        images: this.fileList,
        type: this.type,
        region: this.form.region,
        address: this.form.address,
        area: this.form.area,
        price: this.form.price,
        title: this.form.title,
        years: this.form.years,
        description: this.form.description,
        person: this.form.person,
        phone: this.form.phone,
        imageCode: this.form.imageCode,
        phoneCode: this.form.phoneCode
      }
    }
  },
  watch: {
    $route: (to, from) => {
      console.log(1111)
      if (this.$route.query.landId) {
        console.log(this.$route.query.landId)
      } else {
        console.log(111)
      }
    }
  },
  created () {
    if (this.$route.query.landId) {
      let landId = this.$route.query.landId
      this.getLandDetail(landId)
    }
    this.changeImage()
  },
  methods: {
    async getLandDetail (landId) {
      const res = await this.$http.post('/land/getLandById', {
        landId
      })
      const {data} = res
      if (data && data.state === 1) {
        this.type = data.data.type
        this.form.region = data.data.region
        this.form.address = data.data.address
        this.form.area = data.data.area
        this.form.price = data.data.price
        this.form.title = data.data.title
        this.form.years = data.data.years
        this.form.description = data.data.description
        this.form.person = data.data.person
        this.form.phone = data.data.phone
      }
    },
    handleChange (value) {
      this.form.region = CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]
    },
    beforeBtn () {
      if (this.active === 3) {
        this.showFinish = false
        this.showType = false
        this.showContent = true
        this.active = 2
      } else {
        this.showType = true
        this.showContent = false
        this.active = 1
      }
    },
    nextBtn () {
      if (!this.type) {
        this.$message.warning('请选择类型')
        return
      }
      this.showType = false
      this.showContent = true
      this.active = 2
    },
    handleImageSuccess (res, file, fileList) {
      this.fileList.push(res.data)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    changeImage () {
      this.$http.post('/user/verCode').then(res => {
        this.src = 'data:image/png;base64,' + res.data.replace(/\. +/g, '').replace(/[\r\n]/g, '')
      })
      // this.src = 'http://zth.nat300.top/user/verCode?' + num
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$route.query.landId) {
            this.$http.post('/land/alter', {
              id: this.$route.query.landId,
              ...this.params
            }).then(res => {
              if (res.data.state === 1) {
                this.title = '信息发布成功'
              } else {
                this.title = res.data.message
              }
              this.active = 3
              this.showFinish = true
              this.showType = false
              this.showContent = false
            })
          } else {
            this.$http.post('/land/add', {
              userId: localStorage.getItem('useId'),
              ...this.params
            }).then(res => {
              if (res.data.state === 1) {
                this.title = '信息发布成功'
              } else {
                this.title = res.data.message
              }
              this.active = 3
              this.showFinish = true
              this.showType = false
              this.showContent = false
            })
          }
        } else {
          return false
        }
      })
    },
    send () {
      // msgCode(this.form.phone).then(res => {
      //   console.log(res)
      // })
      this.$http.post('/SMS/send', {'phone': this.form.phone}).then(res => {
        if (res.data === 1) {
          this.$message.success('发送成功')
        } else {
          this.$message.error('发送失败')
        }
      }).catch(err => {
        this.$message.error(err)
      })
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer) // 清除定时器
            this.timer = null
          }
        }, 1000)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
    border 1px solid #ddd
    h6
        padding: 20px 20px 40px 10px;
        display: block;
        font-size: 15px;
        line-height: 20px;
        font-weight: bold;
        color: #000;
    .radio
        padding: 0 0 40px 190px;
    .nextbtn
        padding: 0 0 40px 190px;
        .btn
            width: 185px
            height: 47px
            padding: 0
            border: 0
            border-radius: 6px
            font-size: 20px
            line-height: 47px
            background #FF9F00
            box-shadow 0 2px 0 #C8631D
            color #fff
    .content
        width 500px
        padding: 0 0 40px 190px
        margin-top 20px
        .btn
            width: 185px
            height: 47px
            padding: 0
            border: 0
            border-radius: 6px
            font-size: 20px
            line-height: 47px
            background #FF9F00
            box-shadow 0 2px 0 #C8631D
            color #fff
    .finish
        height 200px
        margin 0 auto
        position relative
        .msg
            position absolute
            left 50%
            top 50%
            transform translate(-50%,-50%)
            i
                font-size 120px
                color #FF9F00
            p
                text-align center
                font-size 20px
                color #FF9F00
            .col
                color red
            .btn
                width: 140px
                height: 47px
                padding: 0
                border: 0
                border-radius: 6px
                font-size: 20px
                line-height: 47px
                background #FF9F00
                box-shadow 0 2px 0 #C8631D
                color #fff
</style>
