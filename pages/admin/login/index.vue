<template>
  <div>
    <page-header></page-header>
    <login-panel></login-panel>
  </div>
</template>

<script>
  import PageHeader from '~/components/admin/header/index.vue'
  import LoginPanel from '~/components/admin/loginPanel/index.vue'
  export default {
    data () {
      return {
        name: 'login'
      }
    },
    components: {
      PageHeader,
      LoginPanel
    }
  }
</script>
