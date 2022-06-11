import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"
import moment from "moment"

Vue.config.productionTip = false
Vue.prototype.$baseUrl = "http://45.77.175.23:30000/api/v1"
Vue.prototype.axios = axios
Vue.prototype.moment = moment
Vue.prototype.colorTheme = {
	background: "#ffc107 !important"
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
