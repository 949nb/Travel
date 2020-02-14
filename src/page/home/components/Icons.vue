<template>
  <div class="icons">
    <div class="icon" v-for="(item, index) in iconData" :key="index">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.src" alt="">
      </div>
      <p class="icon-desc">{{item.info}}</p>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'HomeIcons',
   data() {
     return {
       iconData: [
         {
           src: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
           info: '民宿客栈'
         },
         {
           src: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
           info: '专车自驾'
         },
         {
           src: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png',
           info: '赚钱-信用卡'
         },
         {
           src: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
           info: '旅游团购'
         },         {
           src: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
           info: '民宿客栈'
         },
         {
           src: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
           info: '专车自驾'
         },
         {
           src: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png',
           info: '赚钱-信用卡'
         },
         {
           src: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
           info: '旅游团购'
         },
       ]
     }
   }
 }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .icons
    height: 0
    overflow: hidden
    width: 100%
    padding-bottom: 50%
    .icon
      overflow: hidden
      height: 0
      float: left
      width: 25%
      padding-bottom: 25%
      /*background #25a4bb*/
      .icon-img
        /*padding-bottom .44rem*/
        width: 100%
        height: 0
        overflow hidden
        padding-bottom 1.40rem
        text-align center
        .icon-img-content
          height 1.4rem
      .icon-desc
        line-height .44rem
        text-align center
        /*border 1px solid*/
</style>