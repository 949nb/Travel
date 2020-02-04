import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// import './assets/styles/varibles.styl'
import FastClick from 'fastclick'

Vue.config.productionTip = false
FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
