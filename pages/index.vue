<template>
  <div>
    <page-header></page-header>

    <span>{{user}}</span>

    <span>{{token}}</span>


    <div style="padding-top: 5px; text-align: center" class="margin-center">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="margin-center page-width">

      <el-row  :gutter="20">
        <el-col :span="6" v-for="item in 8" :key="item" style="padding-bottom: 15px;">
          <el-card style="height: 220px;"><span>好吃</span></el-card>
        </el-col>
      </el-row>

    </div>


    <page-footer></page-footer>

  </div>
</template>

<script>
import PageHeader from '~/components/front/header/Index.vue'
import PageFooter from '~/components/front/footer/Index.vue'
import {getUserInfo} from '~/api/user/index'
import {mapState} from 'vuex'
export default {
  middleware: 'userAuth',
  async asyncData ({store, redirect}) {
    let result = await getUserInfo(store.state.token)
    if (result.status === 0) {
      store.commit('SET_USER', result.data)
    }
  },
  computed: {
    ...mapState([
      'user',
      'token'
    ])
  },

  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="less">

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .margin-center{
    margin: 0 auto;
  }

  .page-width{
    width: 1180px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
