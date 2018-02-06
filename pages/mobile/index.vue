<template>
  <div>
    <page-header></page-header>

    <div style="margin: 0 auto; padding-top: 5px; text-align: center">

    </div>


  </div>
</template>

<script>
  import PageHeader from '~/components/front/header/Index.vue'

  export default {
    components: {
      PageHeader
    }
  }
</script>

<style>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
