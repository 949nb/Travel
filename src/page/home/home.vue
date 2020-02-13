<template>
  <div>
    <HomeHeader />
    <HomeSwiper />
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
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