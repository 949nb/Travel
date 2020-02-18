<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) of allCity"
      :key="key"
      :ref="key"
      @touchstart="touchS"
      @touchmove="touchM"
      @touchend="touchE"
    >
      {{ key }}
    </li>
  </ul>
</template>

<script>
  // import BScroll from 'better-scroll'
  export default {
    name: "CityAlphabet",
    props: ['allCity'],
    data() {
      return {
        touchStatus: false,
        timer: null
      }
    },
    computed: {
      alphabetList() {
        return Object.keys(this.allCity)
      }
    },
    methods: {
      touchS(e) {
        this.touchStatus = true
        this.$store.commit('changeAlphabet', e.target.innerText)
      },
      touchM(e) {
        if (this.touchStatus) {
          if (this.timer) {
            this.clearTimeout(this.timer)
          } else {
            setTimeout(() => {
              let startX = this.$refs['A'][0].offsetTop
              let moveX = e.touches[0].clientY -79
              let index = Math.floor((moveX - startX) / 20)
              const list = this.alphabetList
              if (index < list.length && index >= 0) {
                this.$store.commit('changeAlphabet', list[index])
              }
            }, 16)
          }
        }
      },
      touchE() {
        this.touchStatus = false
      },
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
