<template>
  <div class="hello">
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <svg class="icon-info " aria-hidden="true">
            <use xlink:href="#icon-31dingwei"></use>
          </svg>
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input"/>
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in bannerPicArray" :key="index"><img  v-lazy="item.imageUrl" style="width: 100%"  alt=""></van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'shoppingMall',
        category:[],
        bannerPicArray:[
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
        ]
      }
    },
    methods:{
      getData(){
        this.$ajax({
          method: 'get',
          url: 'index',
        }).then(function (resp) {
          console.log(resp)
          if(resp.status==200){
            this.category=resp.data.data.category;
          }
        }.bind(this));
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
