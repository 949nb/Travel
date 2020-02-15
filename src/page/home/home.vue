<template>
  <div>
    <HomeHeader :cityList="cityList"/>
    <HomeSwiper :swiperList="fullData.swiperList" />
    <HomeIcons v-if="fullData.iconList" :iconList="fullData.iconList"></HomeIcons>
    <HomeRecommend :recommendList="fullData.recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="fullData.weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { getSwiperData, getCityData } from "@/api/common.js"

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      fullData: {},
      cityList: {}
    }
  },
  mounted() {
    this.getHomeInfo()
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      getCityData()
        .then(res => {
          if (res.ret) {
            this.cityList = res.data
          }
        })
    },
    getHomeInfo() {
      getSwiperData()
        .then(res => {
          if (res.ret) {
            this.fullData = res.data
          }
        })
    }
  },
}
</script>

<style scoped>

</style>