<template>
  <div class="main">
    <div class="content">
      <div class="word">请登录</div>
      <div class="form">
          <el-form ref="form" :rules="rules" :model="form" label-position="left" label-width="100px" class="demo-dynamic">
              <el-form-item label="手机号" prop="phone">
                <el-input  prefix-icon="el-icon-user" v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input  prefix-icon="el-icon-unlock" type="password" v-model="form.password"></el-input>
              </el-form-item>
            <el-checkbox v-model="checked">下次自动登录</el-checkbox>
            <span class="forgetword" @click="forgetpass">忘记密码</span>
            <el-button class="btn"  @click="onSubmit('form')">立即登录</el-button>
          </el-form>
          <p @click="goRegister">没账号？立即注册</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        phone: '',
        password: ''
      },
      checked: false,
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号'}
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/user/login', {
            'phone': this.form.phone,
            'password': this.form.password
          }).then(res => {
            if (res.data.state === 1) {
              localStorage.setItem('useId', res.data.data.id)
              localStorage.setItem('useInfo', JSON.stringify(res.data.data))
              this.$message.success('登录成功')
              this.$router.push({
                name: 'Home'
              })
            } else {
              this.$message.warning(res.data.message)
            }
          }).catch(err => {
            console.log(err)
            this.$message.error(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    goRegister () {
      this.$router.push({name: 'Register'})
    },
    forgetpass () {
      this.$router.push({name: 'RetrievePass'})
    }
  }

}
</script>

<style lang="stylus" scoped>
.main
  position absolute
  left 0
  width 100%
  height 100%
  background-image url(https://cas.tuliu.com/cas/tuliu/images/login-bg.jpg)
  background-repeat: no-repeat
  background-size: cover
  .content
    width 500px
    margin 100px auto
    background: #fff;
    border-radius: 6px;
    position: relative;
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
      margin-bottom 20px
      .forgetword
        float right
        cursor pointer
        color #57A5FF
        &:hover
            color #337ab7
      .btn
        width 100%
        background #ff9f00
        color #fff
        border-radius 6px 6px 6px 6px
        margin-top 20px
      p
        color #FF9F00
        font-size: 14px !important
        font-weight bold
        margin-bottom 20px
        text-align center
        margin-top 10px
        &:hover
            cursor pointer
</style>
