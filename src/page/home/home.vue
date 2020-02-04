<template>
  <div>
    <HomeHeader />
    
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#isousuo"></use>
    </svg>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
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