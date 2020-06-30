<template>
  <div>
    <!-- <loading v-if="!isReady"></loading> -->
    <!-- 本页面自有的部分 -->
    <div class="hopeful">
      <p>近期最受期待</p>
      <div class="img-list" ref="imgList">
        <div class="hopeful-list" v-for="(item,index) in hopefulList" :key="index">
          <div class="hope-img">
            <img :src="item.img.replace('w.h','128.180')" alt>
            <p class="wish">{{item.wish}}想看</p>
          </div>
          <div class="hopeful-info">
            <p class="name">{{item.nm}}</p>
            <p class="showTime">{{`${item.day} ${item.week}`}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 插入组件 -->
    <div class="comming">
      <!-- :mitem="c_item" ==> 通过属性绑定向子组件动态传值 -->
      <movie-list v-for="(c_item,index) in comingList" :key="index" :mitem="c_item"></movie-list>
    </div>
  </div>
</template>

<script>
import movieList from "./movieList";
import movieData from "../../static/movieSources/movieData";
// import movieData from "../../movieSources/movieData";
// import movieList from "./movieList";
// import axios from "axios";

// 导出组件
export default {
    name:'comming',
    components:{
      movieList
    },
    data(){
      return {
        comingList: [],
        hopefulList: [],
        isReady:false
      }
    },
    created(){
      this.comingList=movieData.movieData.coming
      this.hopefulList=movieData.movieData.coming
      // var me = this;
      // function getComingList() {
      //   return me.$axios.get(
      //     "https://www.softeem.xin/maoyanApi/ajax/comingList?ci=57&token=&limit=10"
      //   );
      // }
      // function getHopefuList() {
      //   return me.$axios.get(
      //     "https://www.softeem.xin/maoyanApi/ajax/mostExpected?ci=57&limit=10&offset=0&token="
      //   );
      // }
      // me.$axios.all([getComingList(), getHopefuList()]).then(
      //   me.$axios.spread((comRes, hopeRes) => {
      //     this.comingList = comRes.data.coming;
      //     this.hopefulList = hopeRes.data.coming;
      //   })
      // )
    }
}
</script>

<style scoped>
@import "../assets/css/movie-list.css";

.hopeful {
  /* padding: 10px 0px 0px 15px; */
  margin: 10px 20px 10px 15px;
  border-bottom: 8px solid #eee;
}

.hopeful >p {
  font-size: 14px;
  margin-bottom: 10px;
}

.img-list {
  height: 166px;
  overflow: hidden;
  display: flex;
  flex-direction: row;

  /* 手指左右滑动 */
  display: -webkit-box;
  overflow-x: auto;
  /*适应苹果*/
  -webkit-overflow-scrolling: touch;
}
/*隐藏掉滚动条*/
.img-list::-webkit-scrollbar {
  display: none;
}

.hopeful-list {
  width: 86px;
  height: 166px;
  margin-right: 12px;
}

.hope-img img {
  width: 85px;
  height: 115px;
}

.hope-img {
  position: relative;
  overflow: hidden;    /*BFC*/
}

.hope-img:before {
  content: "♡";
  color: #ccc;
  font-size: 14px;
  text-align: center;
  line-height: 28px;
  width: 28px;
  height: 28px;
  background-color: rgba(61, 63, 71, 0.6);
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
}

.hope-img  .wish {
  width: 85px;
  position: absolute;
  font-weight: bold;
  font-size: 12px;
  color: #faaf00;
  /* margin: -40px 0px 6px 0px; */
  top:78px;
  left:0;
  padding: 20px 0px 0px 3px;
  background: linear-gradient(rgba(77, 77, 77, 0), #000);
}

.hopeful-info .name {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 3px;
  overflow: hidden;
  white-space: nowrap;         /* 文本是否换行文本不会换行，nowrap：文本会在在同一行上继续，直到遇到 <br> 标签为止。 */     
  text-overflow: ellipsis;    /*   指定当文本溢出包含它的元素，应该发生什么：clip(不显示)  ellipsis(使用省略号)  string(使用指定字符串);*/  
}

.hopeful-info .showTime {
  font-size: 12px;
  color: #888;
}
</style>