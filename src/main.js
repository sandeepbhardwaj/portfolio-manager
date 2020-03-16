import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApexCharts from 'apexcharts'
import '@/plugins/axios'
import buefy from '@/plugins/buefy'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  buefy,
  ApexCharts,
  render: h => h(App)
}).$mount('#app')
