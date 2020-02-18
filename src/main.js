import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import './assets/styles/varibles.styl'
import FastClick from 'fastclick'
import { store } from './store/index.js'

Vue.config.productionTip = false
FastClick.attach(document.body)

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
