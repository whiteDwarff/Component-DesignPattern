import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // h : createElement의 약어(가상 dom)

  // 1
  // render(createElement) {
  //   return createElement(App)
  // },
  // 2
  // render(h) {
  //   return h(App)
  // },
  // 3
  // render: h => h(App)
}).$mount('#app')
