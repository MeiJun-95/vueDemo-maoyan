<template>
<!-- 加载动画也算是一个单独的组件，但它不属于页面中的某一板块，这种组件可以再划分成一个组件模块，为这些组件也创建一个文件夹 -->
<!-- 因为它也会在多个页面中使用，所以把它也在 main.js 中注册为全局组件，然后就可以在其它页面中使用了 -->
  <div>
    <div class="loading-bg">
      <img src="../assets/img/loading.gif" class="loading">
       <p>你的网络有点慢呢</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'loading'
}
</script>

<style lang='scss' scoped>
.loading-bg {
  text-align: center;
  position: fixed;
  padding: 20px;
  background-color: rgba(32, 32, 32, 0.493);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  z-index: 9;
  
  .loading {
    width: 60px;
    height: 60px;
  }
 
  p {
    color: #fff;
  }
}
</style>
