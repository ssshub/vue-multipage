import Vue from 'vue'
import App from './App'
import router from './router'
//import store from './store'
import fastclick from 'fastclick'
import clipboard from 'clipboard'
//import axios from 'axios';

import {
  Style,
  Tip,
  Toast,
} from 'cube-ui';

//Vue.prototype.$axios = axios
//Vue.config.productionTip = false
Vue.use(Tip)
Vue.use(Toast)

fastclick.attach(document.body)
new clipboard('.clipboard-btn');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
