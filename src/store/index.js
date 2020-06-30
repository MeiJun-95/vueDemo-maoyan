import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isLogin: 0,
        userNick: '',
        defaultHeadImg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2363028509,190015165&fm=26&gp=0.jpg',
        userHeadImg: this.defaultHeadImg,
        // 模拟数据库用户信息   可以交给后台做，客户端提交用户信息，得到返回结果判断用户是否存在
        testInfo: [
            {
                account: 'yyqx',
                password: '111111',
                userNick: '易烊千玺',
                userHeadImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3279316276,2228302562&fm=26&gp=0.jpg',
                likeList: ['吉他', '跳舞']
            },
            {
                account: 'jc',
                password: '111111',
                userNick: '蒋丞',
                userHeadImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3279316276,2228302562&fm=26&gp=0.jpg',
                likeList: ['吉他', '优秀']
            }
        ]
    },
    getters:{
        // 输入账号名，判断testInfo（数据库）是否有这个用户，如果有返回这个用户所有信息，否则返回-1
        testUserInfo: state => account => {   
            let userinfoIndex = state.testInfo.findIndex(info => info.account === account)
            return userinfoIndex === -1 ? undefined : state.testInfo[userinfoIndex]
          },
        //也可以通过让 getter 返回一个函数，来实现给 getter 传参。在对 store 里的数组进行查询时非常有用。
        
        // testUserInfo:function(state){
        //   return function(account){
        //     let userinfoIndex = state.testInfo.findIndex(function(info){
        //         info.account === account
        //      })
        //     return userinfoIndex === -1 ? undefined : state.testInfo[userinfoIndex]
        //   }
        // } 
    },
    mutations:{
        loginOut(state){
            state.isLogin=0
            state.userNick=''
            state.userHeadImg=state.defaultHeadImg
        },
        loginIn(state,payload){
            state.isLogin=1
            state.userNick = payload.userNick
            state.userHeadImg = payload.userHeadImg || state.defaultHeadImg
        },
        register : (state,payload) =>state.testInfo.push(payload)  //直接将注册的用户信息存入testInfo
    }
    
})