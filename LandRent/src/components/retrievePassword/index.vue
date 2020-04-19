<template>
  <div class="main">
    <el-upload
      class="upload-demo"
      drag
      action="http://zth.nat300.top/CLand/image"
      :on-success="handleImageSuccess"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div class="content">
      <div class="word">找回密码</div>
      <div class="form">
          <el-form ref="form" :rules="rules" :model="form" label-position="left" label-width="100px" class="demo-dynamic">
              <el-form-item label="手机号" prop="phone">
                <el-input  prefix-icon="el-icon-user" v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item style="margin-bottom:0px" label="图形验证码" prop="imageCode">
                <el-input prefix-icon="el-icon-notebook-2" v-model="form.imageCode"></el-input>
                <img @click="changeImage" style="width: 100px; height: 50px;margin-top:5px" :src="src" fit="scale-down"/>
              </el-form-item>
              <el-form-item label="新密码" prop="newPwd">
                <el-input prefix-icon="el-icon-unlock" type="password" v-model="form.newPwd"></el-input>
              </el-form-item>
              <el-form-item label="短信验证码" prop="verCode">
                <el-input prefix-icon="el-icon-message" v-model="form.verCode"></el-input>
                <el-button style="margin-top:10px" icon="el-icon-mobile-phone" @click="send" type="success" :disabled="disabled=!show">
                    <span v-show="show">获取验证码</span>
                    <span v-show="!show">{{count}} s</span>
                </el-button>
              </el-form-item>
              <el-button class="btn"  @click="onSubmit('form')">重置密码</el-button>
          </el-form>
        </div>
    </div>
  </div>
</template>

<script>
const TIME_COUNT = 60 // 更改倒计时时间
export default {
  data () {
    return {
      form: {
        phone: '',
        newPwd: '',
        imageCode: '',
        verCode: ''
      },
      src: '',
      show: true, // 初始启用按钮
      count: '', // 初始化次数
      timer: null,
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号'}
        ],
        newPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        imageCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        verCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.changeImage()
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/user/findPwd', {
            'phone': this.form.phone,
            'imageCode': this.form.imageCode,
            'verCode': this.form.verCode,
            'newPwd': this.form.newPwd
          }).then(res => {
            if (res.data.state === 1) {
              this.$message.success('密码修改成功')
            } else {
              this.$message.success(res.data.message)
            }
          }).catch(err => {
            this.$message.error(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    send () {
      this.$http.post('/SMS/send', {'phone': this.form.phone}).then(res => {
        console.log(res)
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
    },
    changeImage () {
      this.$http.post('/user/verCode').then(res => {
        this.src = 'data:image/png;base64,' + res.data.replace(/\. +/g, '').replace(/[\r\n]/g, '')
      })
      // this.src = 'http://zth.nat300.top/user/verCode?' + num
    },
    handleImageSuccess (res, file, fileList) {
      console.log(res, file, fileList)
    }
  }

}
</script>

<style lang="stylus" scoped>
.main
  position absolute
  left 0
  width 100%
  background-image url(https://cas.tuliu.com/cas/tuliu/images/signup-bg2.jpg)
  background-repeat: no-repeat
  background-size: cover
  .content
    width 500px
    margin 100px auto
    // width: 500px;
    // min-height: 427px;
    // margin: 0 auto;
    background: #fff;
    border-radius: 6px;
    // position: relative;
    .word
      height 80px
      padding-left 50px
      padding-right 50px
      background: #ff9f00;
      color: #fff;
      border-radius: 6px 6px 0 0;
      line-height: 80px;
      text-align center
      font-size 22px
    .form
      width 400px
      padding 20px 50px
      .btn
        width 100%
        background #ff9f00
        color #fff
        border-radius 6px 6px 6px 6px
        margin-top 10px
</style>
