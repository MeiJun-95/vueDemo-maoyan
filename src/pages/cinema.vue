<template>
  <div calss="box">
    <div v-if="!isLogin">
      登录后才能收看
    </div>
    <div v-else>
      登录成功，加入这里很多信息
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>