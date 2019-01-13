<template>
  <div class="success">
        <h1>登录成功{{auth_url}}</h1>
  </div>
</template>

<script>

export default {
  name: 'loginSuccess',
  data() {
    return {
      auth_url: ''
    }
  },
  create(){
    this.auth_url = this.$router.query
  },
  methods: {
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 
</style>
