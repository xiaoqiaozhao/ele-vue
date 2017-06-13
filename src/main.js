import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
/* 发送ajax请求 */
import vueResource from 'vue-resource'

import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

/* 引入fonts.styl */
import './common/stylus/fonts.styl'
/* 引入mock模拟数据 */
import './mock/mockServer'

// 声明使用vue的插件
Vue.use(VueRouter)
// 声明使用vueResource
Vue.use(vueResource)
// 创建路由器实例
var router = new VueRouter()

// 映射路由
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

// 启动应用
router.start(app, '#app')

// 请求默认路由
router.go('/goods')
