import Vue from 'vue'
import App from '@/views/App.vue'
import router from './router'
import iView from 'iview'
import store from './store'
import 'iview/dist/styles/iview.css'
import './assets/css/common.less'

Vue.config.productionTip = false

Vue.use(iView)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
