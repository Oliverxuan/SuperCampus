import App from './App'
import'util/router.js'

import {myRequest} from 'util/api.js'

// #ifndef VUE3
import Vue from 'vue'


Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

