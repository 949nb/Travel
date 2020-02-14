<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="(item) in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
 export default {
   name: 'HomeIcons',
   props: ['iconList'],
   computed: {
     pages() {
       const pages = []
       this.iconList.forEach((item, index) => {
         const page = Math.floor(index / 8)
         if (!pages[page]) {
           pages[page] = []
         }
         pages[page].push(item)
       })
       return pages
     }
   }
 }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top .1rem
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
        ellipsis()
        /*border 1px solid*/
</style>