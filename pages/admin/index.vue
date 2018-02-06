<template>
  <div>

    <page-header></page-header>

    <left-menu></left-menu>

  </div>
</template>

<script>
  import PageHeader from '~/components/admin/header/index.vue'

  import LeftMenu from '~/components/admin/menu/index.vue'

  export default {
    middleware: 'adminAuth',
    components: {
      PageHeader,
      LeftMenu
    },
    computed: {
      getHeightStyle () {
        return `height:900px`
      }
    }
  }
</script>

<style scoped lang="less">

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .manage-left-menu-container{
    width: 220px;
    height: 100%;
  }

</style>
