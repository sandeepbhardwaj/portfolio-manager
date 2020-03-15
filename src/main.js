import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import buefy from './plugins/buefy'
import ApexCharts from 'apexcharts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  buefy,
  ApexCharts,
  render: h => h(App)
}).$mount('#app')
