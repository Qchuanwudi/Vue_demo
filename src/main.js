import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './veevalidate'
import * as API from './api'
import {
  Button
} from 'mint-ui'
import 'mint-ui/lib/style.css'


import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader'
import store from './store'
// Vue全局注册组件的语法： Vue.component(组件名，组件)
Vue.prototype.$API = API
Vue.component('GshopHeader', GshopHeader)
Vue.component(Button.name, Button)
Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  router, // 安装路由器
  store
})

// new Vue({
//   el: '#app',
//   render: h => h(App),
// }).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })