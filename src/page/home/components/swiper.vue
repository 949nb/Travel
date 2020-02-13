<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in this.swiperList" :key="index">
        <img class="swiper-img" :src="item.url" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'AwesomeSwiper',
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperList : [
        {
          id: '0001',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg'
        },
        {
          id: '0002',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg'
        }
      ]
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
    padding-bottom: 26.66%
    // padding的百分比是相较与父级元素宽度的百分比
    /*border: 1px solid red;*/
    .swiper-img
      width: 100%
</style>