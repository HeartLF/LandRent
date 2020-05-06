<template>
  <div>
    <el-dialog title="修改用户信息" :visible.sync="show">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idNumber">
          <el-input v-model="ruleForm.idNumber"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" disabled></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
            :limit="1"
             action="landImage/upload"
            :data="{ userId: ruleForm.id }"
            :file-list="fileList"
            list-type="picture-card"
            :on-success="handleImageSuccess"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <!-- <el-dialog :visible.sync="dialogVisible"> -->
          <img width="100%" :src="dialogImageUrl" alt="" />
          <!-- </el-dialog> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="submit('ruleForm')">确定</el-button>
        <el-button size="small" @click="cancel">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Contract',
  props: {
    showModel: {
      type: Boolean
    },
    ruleForm: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    show: {
      get: function () {
        return this.showModel
      },
      set: function (v) {
        this.$emit('update:showModel', v)
      }
    },
    fileList () {
      return [{
        url: 'http://123.57.237.81' + this.ruleForm.image
      }]
    }
  },
  data () {
    return {
      //   dialogTableVisible: true
      // ruleForm: {
      //   name: '',
      //   phone: '',
      //   idNumber: '',
      //   password: ''
      // },
      src: '',
      checked: false,
      deadline: '',
      dialogImageUrl: '',
      // fileList: [{
      //   url: 'http://123.57.237.81' + this.ruleForm.image
      // }]
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        身份证号: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ]
      }

    }
  },
  created () {},
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
    },
    handleImageSuccess (res, file, fileList) {
      console.log(res.data)
      this.ruleForm.image = res.data
    },
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/user/alterUser', {
            ...this.ruleForm
          }).then(res => {
            if (res.data.state === 1) {
              this.$emit('update:showModel', false)
            } else {
              this.$message.error(`${res.data.message}`)
            }
          })
        } else {
          return false
        }
      })
    },
    cancel () {
      this.dialogImageUrl = ''
      this.$emit('update:showModel', false)
    }
  }
}
</script>

<style></style>
