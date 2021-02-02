// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './static/iconfont/iconfont.css'
import './static/iconfont/reset.css'
import './static/iconfont/border.css'
// 视频播放器样式
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 轮播样式
import 'swiper/dist/css/swiper.css'
// 引入自定义弹出框
import Toast from './components/toast/toast.js'

Vue.config.productionTip = false
// 使用VueAwesomeSwiper
Vue.use(VueAwesomeSwiper)
// 挂载自定义弹出框
Vue.prototype.$toast = Toast
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
