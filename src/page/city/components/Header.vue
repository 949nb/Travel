<template>
  <div class="header">
    <div>
      <span class="iconfont header-back" @click="backToHome">&#xe62d;</span>
    </div>
    城市选择
  </div>
</template>

<script>
  export default {
    name: "CityHeader",
    methods: {
      backToHome() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-back
      position absolute
      width .64rem
      text-align center
      font-size .4rem
      left: .2rem
      transform rotate(90deg)
</style>