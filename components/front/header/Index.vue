<template>
  <div>
    <top v-if="showTop"></top>

    <div v-if="showMenu" class="menu-container">
      <el-menu defaultActive="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" route="" disabled="">
          仓库查询
        </el-menu-item>
        <el-menu-item index="2" route="" disabled="">
          出库申请
        </el-menu-item>
        <el-menu-item index="3" route="" disabled="">
          入库
        </el-menu-item>
      </el-menu>

    </div>

  </div>
</template>

<script>
  import Top from './Top.vue'

  export default {
    data () {
      return {
        name: 'menu'
      }
    },
    components: {
      Top
    },
    props: {
      showMenu: {
        type: Boolean,
        default: false
      },
      showTop: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped lang="less">
  .menu-container{
    width: 1180px;
    /*background-color: #47494e;*/
    height: 100%;
    margin: 0 auto;
  }
</style>
