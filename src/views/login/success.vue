<template>
  <div class="success">
    <h1>登录成功</h1>
  </div>
</template>

<script>

export default {
  name: 'Success',
  data() {
    return {
      auth_url: ''
    }
  },
  create() {
    this.auth_url = this.$router.query
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
