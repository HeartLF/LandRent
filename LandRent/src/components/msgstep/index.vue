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
                <p>信息发布成功</p>
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
export default {
  name: 'MsgSteps',
  data () {
    return {
      active: 1,
      type: '',
      showType: true,
      showContent: false,
      showFinish: false,
      showIcon: true,
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
  created () {
    this.changeImage()
  },
  methods: {
    handleChange (value) {
      this.form.region = CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]
      console.log(this.form.region)
      // console.log(value) // value值为区域码
      // // 用CodeToText转换成中文
      // console.log(CodeToText[value[0]])
      // console.log(CodeToText[value[1]])
      // console.log(CodeToText[value[2]])
    },
    beforeBtn () {
      this.showType = true
      this.showContent = false
      this.active = 1
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
          this.form.type = this.type
          // const params = JSON.stringify(this.form)
          this.$http.post('/land/add', {
            userId: localStorage.getItem('useId'),
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
          }).then(res => {
            if (res && res.state === 1) {
              this.showFinish = true
              this.showType = false
              this.showContent = false
            }
          })
        } else {
          return false
        }
      })
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
</style>
