// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Row, Col,Swipe, SwipeItem,Lazyload  } from 'vant'
import '@/styles/common.scss' // global css
import '@/assets/iconfont' // icon
import axios from 'axios'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload);;

Vue.config.productionTip = false
var instance = axios.create({
  // baseURL:  'http://139.196.192.241:10133/',
  baseURL:  'https://www.easy-mock.com/mock/5b4dca4d1aa15d0bd62fa882/SmileVue/',
  // baseURL: 'http://139.196.192.241:10201/',
  // baseURL:'http://localhost:8080/jupiter/',
  // baseURL:'http://192.168.1.126:8080/jupiter/',
  // baseURL:'http://192.1.9.61:8083',
  // baseURL:'http://127.0.0.1:8084/',
  timeout: 10000,  //10s超时
});
Vue.prototype.$ajax = instance
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
