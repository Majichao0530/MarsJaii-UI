import Vue from 'vue'
import App from './App.vue'
import MjUi from '../packages'

Vue.use(MjUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
