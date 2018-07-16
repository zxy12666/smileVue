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
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'shoppingMall'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
