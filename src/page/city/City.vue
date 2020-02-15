<template>
  <div>
    <CityHeader />
    <CitySearch />
    <CityList :all-city="allCity" :hot-city="hotCity"/>
    <CityAlphabet :all-city="allCity" />
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import { getCityData } from "@/api/common.js"

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      allCity: {},
      hotCity: {}
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      getCityData()
        .then(res => {
          if (res.ret) {
            this.allCity = res.data.cities
            this.hotCity = res.data.hotCities
          }
        })
    },
  }
}
</script>

<style lang="stylus" scoped>

</style>