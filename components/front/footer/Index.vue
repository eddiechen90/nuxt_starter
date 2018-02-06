<template>
  <div class="page_footer">
    <div>关于我们</div>
    <span>Copyright  2013-2016 Pangoo Group Co., Ltd. All Rights Reserved 赤峰市盘古帮帮创业孵化有限公司 版权所有</span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: 'footer'
      }
    }
  }
</script>

<style lang="less">
  @import '../../../assets/less/variable';

  .page_footer{
    background-color: @theme-color;
    width: 100%;
    text-align: center;
    height: 200px;
    padding-top: 80px;
  }

</style>
