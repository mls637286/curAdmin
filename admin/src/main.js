import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/assets/css/common.css'

Vue.config.productionTip = false
// 引入iconfont
import '@/assets/Iconfont/iconfont.css'

import tool from '@/utils/Cookie'
Vue.prototype.tool = tool;


// import SocketService from '@/utils/socket_service'
//
// SocketService.Instance.connect()
// Vue.prototype.$socket = SocketService.Instance
// Vue.prototype.wsPath = 'ws://192.168.0.135:8080'     // websocket路径

// 引入echarts
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
