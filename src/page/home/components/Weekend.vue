<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.src" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'HomeWeekend',
    data() {
      return {
        recommendList: [
          {
            id: '0001',
            title: '大连红烂漫洗浴中心',
            src: 'https://source.unsplash.com/random/640x214',
            desc: '浪漫大连首选，浪漫的洗浴中心...'
          },
          {
            id: '0002',
            title: '大连红烂漫洗浴中心',
            src: 'https://source.unsplash.com/random/640x214',
            desc: '浪漫大连首选，浪漫的洗浴中心...'
          },
          {
            id: '0003',
            title: '大连红烂漫洗浴中心',
            src: 'https://source.unsplash.com/random/640x214',
            desc: '浪漫大连首选，浪漫的洗浴中心...'
          },
          {
            id: '0004',
            title: '大连红烂漫洗浴中心',
            src: 'https://source.unsplash.com/random/640x214',
            desc: '浪漫大连首选，浪漫的洗浴中心...'
          },
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom: 33.9%;
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color #ccc
      ellipsis()
</style>
