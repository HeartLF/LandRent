<template>
  <div>
     <el-dialog title="土地租赁合同" :visible.sync="show">
    <el-form ref="form" :rules="rules" :model="form" label-width="100px">
      <el-form-item label="土地分类">
        <el-radio-group v-model="form.type">
          <el-radio label="耕地">耕地</el-radio>
          <el-radio label="农场">农场</el-radio>
          <el-radio label="林地">林地</el-radio>
          <el-radio label="农家乐">农家乐</el-radio>
          <el-radio label="宅基地">宅基地</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="所在地区">
        <el-cascader
          size="large"
          :options="options"
          v-model="selectedOptions"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="土地面积" prop="area">
        <el-input v-model="form.area"></el-input>
      </el-form-item>
      <el-form-item label="金额" prop="price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="使用年限" prop="years">
        <el-input v-model="form.years"></el-input>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload
          action="landImage/upload"
          list-type="picture-card"
          :on-success="handleImageSuccess"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
          <div slot="tip" class="el-upload__tip">
            最多上传6张，单张照片最大4MB，支持：PG/JPEG/GIF/PNG格式
          </div>
        </el-upload>
        <!-- <el-dialog :visible.sync="dialogVisible"> -->
        <img width="100%" :src="dialogImageUrl" alt="" />
        <!-- </el-dialog> -->
      </el-form-item>
      <el-form-item label="信息标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="土地详情" prop="description">
        <el-input
          type="textarea"
          placeholder="可输入土地状况、价值说明、对融资者的要求等信息"
          v-model="form.description"
        ></el-input>
      </el-form-item>
      <el-form-item label="土地联系人" prop="person">
        <el-input v-model="form.person"></el-input>
      </el-form-item>
      <el-form-item label="联系人电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="图形验证码" prop="imageCode">
        <el-input v-model="form.imageCode"></el-input>
        <img
          @click="changeImage"
          style="width: 100px; height: 50px;margin-top:5px"
          :src="src"
          fit="scale-down"
        />
      </el-form-item>
      <el-form-item label="验证码" prop="phoneCode">
        <el-input v-model="form.phoneCode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" @click="beforeBtn">上一步</el-button>
        <el-button class="btn" @click="onSubmit('form')">立即发布</el-button>
      </el-form-item>
    </el-form>
   </el-dialog>
  </div>
</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  name: 'landInfo',
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      active: 1,
      type: '',
      showType: true,
      showContent: false,
      showFinish: false,
      showIcon: true,
      // form: {
      //   region: '',
      //   address: '',
      //   area: '',
      //   price: '',
      //   title: '',
      //   years: '',
      //   description: '',
      //   person: '',
      //   phone: '',
      //   imageCode: '',
      //   phoneCode: '',
      //   type: ''
      // },
      rules: {
        region: [{ required: true, message: '请选择地址', trigger: 'blur' }],
        address: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        area: [{ required: true, message: '请输入面积', trigger: 'blur' }],
        price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
        title: [{ required: true, message: '请输入信息标题', trigger: 'blur' }],
        years: [{ required: true, message: '请输入年限', trigger: 'blur' }],
        description: [
          { required: true, message: '请输入描述', trigger: 'blur' }
        ],
        person: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
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
    show: {
      get: function () {
        return this.showModel
      },
      set: function (v) {
        this.$emit('update:showModel', v)
      }
    },
    form () {
      return this.info
    }
  },
  created () {
    this.changeImage()
  },
  methods: {
    handleChange (value) {
      this.form.region =
        CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]
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
        this.src =
          'data:image/png;base64,' +
          res.data.replace(/\. +/g, '').replace(/[\r\n]/g, '')
      })
      // this.src = 'http://zth.nat300.top/user/verCode?' + num
    },
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.form.type = this.type
          // const params = JSON.stringify(this.form)
          this.$http
            .post('/land/add', {
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
            })
            .then(res => {
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

</style>
