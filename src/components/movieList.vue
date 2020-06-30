<template>
  <div>
      <!-- 事件代理 -->
      <div @click="$router.push({path:'/movieDetail',query:{id:mitem.id}})" class="movie-list">   
        <div calss="movie-img">
            <img v-lazy="mitem.img.replace('w.h','125.180')" alt>
            <!-- <img v-lazy="mitem.img" alt> -->
        </div>
        <div class="right-info">
            <ul class="movie-info">
                <li class="name">{{mitem.nm}}</li>
                <li class="score" v-if="mitem.globalReleased && mitem.sc!==0">
                    观众评
                    <span>{{mitem.sc}}</span>
                </li>
                <li style="font-size: 14px;color: #888" v-if="mitem.globalReleased && mitem.sc==0">暂无评分</li>
                <li class="score" v-if="!mitem.globalReleased">
                    <span>{{mitem.wish}}</span> 想看
                </li>
                <li class="actor">{{mitem.star}}</li>
                <li class="showinfo">{{`${mitem.rt} ${mitem.week} 上映`}}</li>
            </ul>
            <div class="btn">
                <button v-if="mitem.globalReleased" class="buy-btn">购票</button>
                <button v-if="!mitem.globalReleased" class="pre-btn">预售</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "movieList",
    props: ["mitem"], //通过mitem属性接收父组件的传值
    data(){
        return {};
    }    
}
</script>

<style>
@import "../assets/css/movie-list.css";

img{
   height: 90px;
   width: 64px;
   float: left;
   margin-right: 8px;
}

</style>