/*
使用mockjs提供模拟数据接口
*/
// 使用ES6模块化规范
import Mock from 'mockjs'
import data from './data.json'

// 映射路由接口，mock会把下面的路径拦截
// Mock.mock(url, templete模板（下面写的是变化的数据）)
Mock.mock('/api2/seller', {
  code: 0,
  data: data.seller
})
Mock.mock('/api2/goods', {
  code: 0,
  data: data.goods
})
Mock.mock('/api2/ratings', {
  code: 0,
  data: data.ratings
})
// 暴露不用使用export，直接在main.js中引入使用一次就可以
