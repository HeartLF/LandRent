<template>
  <div>
    <el-dialog title="土地租赁合同" :visible.sync="show" >
        <div ref="imageTofile">
            <div>
                <p>甲方：(出租方)</p>
                <p>乙方：(承租方)</p>
                <p>甲方：(出租方)</p>
                <p>乙方：(承租方)</p>
            </div>

        </div>
         <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          size="small"
          @click="submit"
        >
          保 存
        </el-button>
        <el-button
          size="small"
          @click="cancel"
        >
          取 消
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Sign from '@/components/sign'
import html2canvas from 'html2canvas'
export default {
  name: 'Contract',
  components: {
    Sign
  },
  props: {
    showModel: {
      type: Boolean
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
    }
  },
  data () {
    return {
    //   dialogTableVisible: true
    }
  },
  methods: {
    toImage () {
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      html2canvas(this.$refs.imageTofile, {
        backgroundColor: null
      }).then((canvas) => {
        let url = canvas.toDataURL('image/png')
        console.log(url)
        // this.htmlUrl = url
        // 把生成的base64位图片上传到服务器,生成在线图片地址
        // this.sendUrl()
      })
    },
    submit () {
      this.toImage()
    },
    cancel () {
      this.$emit('update:showModel', false)
    }
  }
}
</script>

<style>

</style>
