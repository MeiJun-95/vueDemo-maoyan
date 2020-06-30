<template>
  <div class="box">
    <div class='head' @click="isLogin===1 ? $router.push('/userInfo'): $router.push('/login')">
      <img class="login" :src='userHeadImg'>
      <p>{{isLogin===1 ? userNick : '立即登录'}}</p>
      <div class="head-btn"></div>
    </div>
    <div class="main">
      <ul>
        <li>
          想看的电影和演出
          <div class="btn"></div>
        </li>
        <li>
          看过的电影
          <div class="btn"></div>
          </li>
        <li>电影卡
          <div class="btn"></div>
        </li>
        <li>我的小剧场
          <div class="btn"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    // name:'notLogin',
    computed:{
    isLogin(){
      return this.$store.state.isLogin //0退出，1登录
    },
    userNick(){
      return this.$store.state.userNick
    },
    userHeadImg(){
      return this.$store.state.userHeadImg
    },
  },
  // computed:{
  //   ...mapState(['isLogin', 'userNick', 'userHeadImg', 'likeList'])
  // }
  methods:{
    loginOut(){
      this.$store.commit('loginOut')
    }
  }
  // methods:{
  //   ...mapMutations(['loginOut'])
  // }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.box {
  height:100px;
  width:100%;
  background: rgb(229, 72, 71);
  padding:20px 5px 10px;
  margin-top:-50px;

  .head{
    width:100%;
    padding-left:15px;
    position: relative;
    @include flex-box(row, left, center);

    .login{
      width:50px;
      height:50px;
      border-radius: 50%;
      border:1px solid #ccc;
      // transform: scale();
      // background:#000;
      // margin-right: 20px;
    }

    p{
      color:#fff;
    }

    .head-btn{
      float:right;
      transform: rotate(45deg);
          width: 14px;
          height: 14px;
          border:1px solid;
          border-color:#ccc #ccc transparent transparent;
          position: absolute;
          right:20px;
          top:50%;
    }
  }

  .main{
    width: 100%;
    font-size:12px;
    margin-top:30px;

    ul{
      padding:0 10px;

      li{
        padding:15px 0;
        border-bottom: 1px solid rgb(226, 225, 225);
        position: relative;

        .btn{
          // transform: scale(0.5);
          transform: rotate(45deg);
          width: 14px;
          height: 14px;
          border:1px solid;
          border-color:#ccc #ccc transparent transparent;
          position: absolute;
          right:0;
          top:50%;
          margin-top:-8px;
        }
      }
    }
  }

  
}
// .login {
//   margin-top: 16px;
//   padding: 5px 30px;
//   border: none;
//   border-radius: 3px;
//   background: #f03d37;
//   color:#fff;
// }
</style>