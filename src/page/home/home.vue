<template>
  <div>
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons></HomeIcons>
    <HomeRecommend></HomeRecommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data() {
    return {

    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>