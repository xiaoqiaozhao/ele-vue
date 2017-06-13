<template>
  <div class="cartcontrol">
    <!-- 注意冒泡 -->
    <div class="cart-decrease icon-remove_circle_outline" transition="move" v-show="food.count"
         @click.stop="updateFoodCount(food, false, $event)">
    </div>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <!-- 点击添加菜单项 -->
    <div class="cart-add icon-add_circle" @click.stop="updateFoodCount(food, true, $event)"></div>
  </div>
</template>

<script>
  export default{
    props: {
      food: Object,
      updateFoodCount: Function  /* 在goods组件中定义 */
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    /* 控制器的过渡 */
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
      &.move-transition
        opacity: 1
        transition: all 0.4s linear
        transform: translate3d(0, 0, 0) rotate(0)
      &.move-enter, &.move-leave
        opacity: 0
        transform: translate3d(24px, 0, 0) rotate(180deg)

    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>