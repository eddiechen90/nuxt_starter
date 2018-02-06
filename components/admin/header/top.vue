<template>
  <div class="top">
    <div>

      <el-row>
        <el-col :span="6">
          <div class="logo">

          </div>

        </el-col>
        <el-col :span="18">
          <!--<span class="header-text">·&nbsp;无人小超库存管理系统</span>-->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'top'
      }
    },
    props: {
      left: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="less">

  @import '../../../assets/admin/less/variable';

  /*@import '../../static/images/logo.jpg';*/

  .top{
    height: 60px;
    width: 100%;
    background-color: @theme-color;
  }

  .logo{
    width: 200px;
    height: 60px;
    background: url("../../../static/admin/images/logo-left.png") no-repeat center;
  }

  .header-text{
    color: #0065A1;
    font-size: smaller;
    line-height: 60px;
    font-weight: bold;
  }

</style>
