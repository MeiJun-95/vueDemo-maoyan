// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //其实就是：import router from './router/index.js'. 在使用webpack项目中，如果导入index.js，则可以省略.这里是相当于导入了一个路由
import store from './store'

import axios from 'axios'  //引入axios模块
import pageTitle from './components/pageTitle'
import loading from './layout/loading'
import pageFooter from './components/pageFooter'
import icon from './layout/icon'



// 在mina.js中引入axios，因为其不属于vue全家桶，所以将其挂载在vue原型上，实现全局使用
Vue.prototype.$axios = axios  //将axios挂载到vue原型链上。

 // 注册全局组件
Vue.component('pageTitle',pageTitle)     // 这个组件会被多个页面使用，所以进行全局注册
Vue.component('loading',loading)    
Vue.component('pageFooter',pageFooter)
Vue.component('icon',icon)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
import errorImg from './assets/img/error.png'
import loadingImg from './assets/img/loading.gif'

// 加载懒加载插件
Vue.use(VueLazyload,{
  error:errorImg,
  loading:loadingImg
})

// 在生产环境下把注释全部去掉
Vue.config.productionTip = false

// 是否启动代码质量检查，不要删除
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
