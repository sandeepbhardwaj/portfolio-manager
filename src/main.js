import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './plugins/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
