<template>
  <div>
    <page-title :showBack='true'>登录</page-title>
    <div class="content">
      <input type="text" placeholder="用户名" v-model="user"><br>
      <input type="password" placeholder="密码" v-model="password"><br>
      <button @click="login">登录</button>
      <p class="register">没有账号？<span @click="$router.push('register')">点我注册</span></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    data(){
        return {
            user:'',
            password:'',
        }
    },
    computed:{
        // testUserInfo(account){
        //     return this.$store.getters.testUserInfo(account)
        // }
        ...mapGetters(['testUserInfo']),
    },
    methods:{
        loginIn(testInfo){
            this.$store.commit('loginIn',testInfo)
        },
        // ...mapMutations(['loginIn']),

        // string.trim()：去除字符串的头尾空格，不会改变原始字符串。若浏览器不支持这个方法，可以用正则代替：x.replace(/^\s+|\s+$/gm,'');
        login(){
            if(!this.user.trim()) return  alert('用户名不能为空！');
            if(!this.password)  alert('请输入密码！');
            // 这里可以请求后台，或者在本地模拟数据库存储用户信息
            let testInfo = this.testUserInfo(this.user)   //调用getter属性里的testUserInfo()，传入用户名，返回-1或拥有这个用户名的用户信息
            if(!testInfo) alert('用户名不存在！');
            if (this.user === testInfo.account && this.password === testInfo.password) {
                this.loginIn(testInfo)     //若密码也正确，调用mutations属性的loginIn()，改变state属性里的用户信息为登录人
                this.$router.push('/')    //登录成功，去首页
            }else{
                 alert('密码错误！！')
                // 可选项：输入错误后清空用户名和密码
                this.user = ''
                this.password = ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0 5%;
  input, button {
    width: 100%;
    border: none;
    outline: none;
    margin-top: 12px;
  }
  > input {
    padding: 12px 10px;
    border-bottom: 1px solid #bfbfbf;
  }
  > button {
    color: #fff;
    padding: 10px 0;
    margin-top: 22px;
    border-radius: 5px;
    background-color: #f03d37;
  }
  > .register {
    margin-top: 12px;
    font-size: 14px;
    color: #888;
    > span {
      color: #f03d37;
    }
  }
}
</style>