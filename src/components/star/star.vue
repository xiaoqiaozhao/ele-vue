<template>
  <!--
    <span class="star24 star24_on"></span>
    <span class="star36 star36_on"></span>
    <span class="star48 star48_on"></span>
    <span class="star24 star24_half"></span>
    <span class="star24 star24_off"></span>
  -->
  <span v-for="sc in starClasses" :class="sc" track-by="$index"></span>
</template>
<script>
  export default{
    props: {
      score: Number,
      size: Number
    },
    computed: {
      starClasses () {
        var scs = []
        var score = this.score
//        得到其整数部分
        var scoreInterger = Math.floor(score)
//        创建scoreInterger个全黄的星星
        for (var i = 0; i < scoreInterger; i++) {
          scs.push(`star${this.size} star${this.size}_on`)
//          background-image url("../../components/star/star24_on@2x.png")
        }
//        半星
        if (score - scoreInterger >= 0.5) {
          scs.push(`star${this.size} star${this.size}_half`)
        }
//        全灰星星
        while (scs.length < 5) {
          scs.push(`star${this.size} star${this.size}_off`)
        }
        return scs
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  // 适配不同的地方的星星
  .star24
    display: inline-block
    width 10px
    height 10px
    background-repeat no-repeat
    background-size 10px 10px
    vertical-align middle
    margin 0 10px
  /* background-image url("../../components/star/star24_on@2x.png") */
  .star24_on
    bg-star(star24_on)
  .star24_half
    bg-star(star24_half)
  .star24_off
    bg-star(star24_off)

  .star36
    display: inline-block
    width 15px
    height 15px
    background-repeat no-repeat
    background-size 15px 15px
    vertical-align middle
    margin 0 10px
  .star36_on
    bg-star(star36_on)
  .star36_half
    bg-star(star36_half)
  .star36_off
    bg-star(star36_off)

  .star48
    display: inline-block
    width 20px
    height 20px
    background-repeat no-repeat
    background-size 20px 20px
    vertical-align middle
    margin 0 10px
  .star48_on
    bg-star(star48_on)
  .star48_half
    bg-star(star48_half)
  .star48_off
    bg-star(star48_off)
</style>