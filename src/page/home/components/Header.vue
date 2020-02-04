<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont"> &#xe624; </span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入/城市/游玩/主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
  @import ('~styles/varibles.styl');
  .header
    display: flex
    background: $bgColor
    line-height: .86rem
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
    .header-input
      padding-left: .2rem
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-bottom: .12rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>