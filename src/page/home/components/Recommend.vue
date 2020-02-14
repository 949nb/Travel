<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.src" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'HomeRecommend',
    data() {
      return {
        recommendList: [
          {
            id: '0001',
            title: '大连红烂漫洗浴中心',
            src: 'https://source.unsplash.com/random/140x140',
            desc: '浪漫大连首选，浪漫的洗浴中心...'
          },
          {
            id: '0002',
            title: '大连红烂漫洗浴中心',
            src: 'https://source.unsplash.com/random/140x140',
            desc: '浪漫大连首选，浪漫的洗浴中心...'
          },
          {
            id: '0003',
            title: '大连红烂漫洗浴中心',
            src: 'https://source.unsplash.com/random/140x140',
            desc: '浪漫大连首选，浪漫的洗浴中心...'
          },
          {
            id: '0004',
            title: '大连红烂漫洗浴中心',
            src: 'https://source.unsplash.com/random/140x140',
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
  .item
    display flex
    overflow hidden
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
      border-radius .2rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top: .16rem
        background #ff9300
        padding: 0 .1rem
        border-radius .06rem
        color #fff
</style>
