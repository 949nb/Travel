<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in this.swiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'AwesomeSwiper',
  props: ['swiperList'],
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    // >>> 穿透选择器
  .wrapper >>> .swiper-pagination-bullet-active
    background: #eaeaea
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31%
    // padding的百分比是相较与父级元素宽度的百分比
    /*border: 1px solid red;*/
    .swiper-img
      width: 100%
</style>