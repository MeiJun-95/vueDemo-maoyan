import Vue from 'vue'
import Router from 'vue-router'
// 引入路由
import index from '@/pages/index'
import movieDetail from '@/pages/movieDetail'


Vue.use(Router)

export default new Router({
  mode:'history',
   // routes用来定义路由对象，里面的每一个对象都是一个路由
  routes: [
    {
      path: '/', // 碰到这个路径跳转路由至index
      name: 'index',  // 给这个路由取的一个别名
      component: index, // 代表在当前路径下，加载index路由
      meta:{
        keepAlive: true    // 在meta属性中设置自定义属性，为true保留路组件状态  
        // 在动态组件上使用keep-alive，缓存组件的实例
      }
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path:'/login',
      name:'login',
      // component:login
      component: () => import('../pages/login')     
      // 路由懒加载   把不同路由对应的组件分割成不同的代码块，当路由被访问的时候才加载对应组件   
      // 结合 Vue 的异步组件和 Webpack 的代码分割功能
      // vue异步组件：需要时再加载。Vue 允许以一个工厂函数的方式定义组件，这个工 厂函数会异步解析组件定义。只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染
      // 1、const Foo = () => Promise.resolve({ /* 组件定义对象 */ })  
      // 2、import('./Foo.vue') // 返回 Promise
    },
		{
			path:'/register',
			name: 'register',
			component: () => import('../pages/register')
    },
    {
			path:'/userInfo',
			name: 'userInfo',
			component: () => import('../pages/userInfo')
		}
    
  ]
})
