<template>
  <el-container class="container">
    <!-- 头部 -->
    <el-header>
      <el-row>
        <el-col :span="12">
         <h2 @click="toHome" style="height:50px;line-height:50px;color: rgb(255, 159, 0);padding-left:10px">云片地租赁系统</h2>
          <!-- <el-image style="width: 210px; height: 54px" :src="url"></el-image> -->
        </el-col>
        <!-- <el-col class="logout" :span="12">
          <template>
            <div class="navOperater">
              <el-link type="info">退出系统</el-link>
            </div>
            <div class="navOperater">
              <el-avatar
                class="avatar"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </div>
          </template>
        </el-col> -->
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside style="width:200px">
        <Aside  style="height:100%"/>
      </el-aside>
      <!-- 内容区 -->
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 导入组件
import Aside from '@/components/admin/sider/index.vue'

export default {
  name: 'home',
  components: {
    Aside
  },
  data () {
    return {
      url: '/logo.png',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down']
    }
  },
  methods: {
    toHome () {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
body > .el-container {
  margin-bottom: 40px;
}
h2:hover{
 cursor pointer
}
.container {
  height: 100vh;
}
.el-header {
  text-align: left;
  background-color: white;
  .logout {
    text-align: right;
    .navOperater {
      width: 80px;
      height: 80px;
      float: right;
      line-height: 50px;
    }
  }
}
.el-main {
  background-color: #e9eef3;
  text-align: center;
}
</style>
