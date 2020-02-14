<template>
  <div>
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons></HomeIcons>
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
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