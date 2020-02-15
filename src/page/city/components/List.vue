<template>
  <div class="list" ref="listScroll">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <button>北京</button>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCity" :key="item.id">
            <button>{{item.name}}</button>
          </div>
        </div>
      </div>
      <div class="area" v-for="item in alphabet">
        <div class="title border-topbottom">{{item}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="itemList in allCity[item]"> {{itemList.name}} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "CityList",
    props: ['allCity', 'hotCity'],
    mounted() {
      this.scroll = new BScroll(this.$refs.listScroll)
    },
    computed: {
      alphabet() {
        const alphabet = Object.keys(this.allCity)
        return alphabet
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #777
    &:after
      border-color: #777
  .border-bottom
    &:before
      border-color #777

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      font-size .26rem
      color #666
    .button-list
      overflow hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        button
          margin: .1rem
          text-align center
          padding: 0rem 0.6rem
          border-radius .06rem
          border: .02rem solid #ccc
    .item-list
      .item
        padding-left .2rem
        line-height .62rem
        color #666
</style>