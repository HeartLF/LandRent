<template>
  <div class="main">
    <div class="content">
      <div class="word">请注册</div>
      <div class="form">
          <el-form ref="form" :rules="rules" :model="form" label-position="left" label-width="100px" class="demo-dynamic">
              <el-form-item label="手机号" prop="phone">
                <el-input  prefix-icon="el-icon-user" v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input prefix-icon="el-icon-unlock" type="password" v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="name">
                <el-input prefix-icon="el-icon-user-solid" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="身份证号" prop="idNumber">
                <el-input prefix-icon="el-icon-notebook-2" v-model="form.idNumber"></el-input>
              </el-form-item>
              <el-form-item label="短信验证码" prop="verCode">
                <el-input prefix-icon="el-icon-message" v-model="form.verCode"></el-input>
                <el-button style="margin-top:10px" icon="el-icon-mobile-phone" @click="send" type="success" :disabled="disabled=!show">
                    <span v-show="show">获取验证码</span>
                    <span v-show="!show">{{count}} s</span>
                </el-button>
              </el-form-item>
              <el-checkbox v-model="checked" >我已阅读同意 《土流服务协议》与 《法律声明及隐私权政策》</el-checkbox>
              <el-button class="btn"  @click="onSubmit('form')">立即注册</el-button>
          </el-form>
        </div>
    </div>
  </div>
</template>

<script>
// import { msgCode } from '@/api/login'
const TIME_COUNT = 60 // 更改倒计时时间
export default {
  data () {
    return {
      form: {
        name: '',
        phone: '',
        password: '',
        idNumber: '',
        verCode: ''
      },
      checked: false,
      radio: false,
      show: true, // 初始启用按钮
      count: '', // 初始化次数
      timer: null,
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号'}
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        idNumber: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          {pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入正确的身份证号'}
        ],
        verCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // this.$http.get('/user/verCode').then(res => {
    //   console.log(res)
    // })
    // msgCode('18706770179').then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.checked) {
            this.$http.post('/user/register', {
              'phone': this.form.phone,
              'name': this.form.name,
              'password': this.form.password,
              'idNumber': this.form.idNumber,
              'verCode': this.form.verCode
            }).then(res => {
              if (res.data.state === 1) {
                this.$message.success('注册成功')
                this.$router.push({
                  name: 'Login'
                })
              } else {
                this.$message.success(res.data.message)
              }
            }).catch(err => {
              this.$message.error(err)
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
