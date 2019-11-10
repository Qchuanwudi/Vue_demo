import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'



import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader'
import store from './store'
// Vue全局注册组件的语法： Vue.component(组件名，组件)
Vue.component('GshopHeader', GshopHeader)
Vue.config.productionTip = false

new Vue({
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