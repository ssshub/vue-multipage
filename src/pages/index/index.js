import Vue from 'vue'
import App from './App'
import router from 'router/index'
//import store from './store'
// import fastclick from 'fastclick'
// import clipboard from 'clipboard'
//import axios from 'axios';

import {
  Style,
  Button,
  //Picker,
  //Select,
  //Input,
  IndexList,
  //Loading,
  Tip,
  Toast,
  //TabBar,
  Slide,
  Scroll,
  Popup,
  //Dialog
} from 'cube-ui';
// import vueLazyload from 'vue-lazyload'






setTimeout(()=>{
  import('./async1')
}, 500)





// Vue.use(vueLazyload);
//Vue.prototype.$axios = axios
//Vue.config.productionTip = false
Vue.use(Tip)
Vue.use(Toast)
//Vue.use(TabBar)
Vue.use(Slide)
Vue.use(Popup)
//Vue.use(Dialog)
Vue.use(Scroll)
//Vue.use(Picker)
//Vue.use(Select)
//Vue.use(Input)
Vue.use(Button)
Vue.use(IndexList)
//Vue.use(Loading)

// fastclick.attach(document.body)
// new clipboard('.clipboard-btn');
/* eslint-disable no-new */

// Vue.mixin({
//   mounted: function () {
//     //图片加载失败，设置默认图片
//     let imgs = document.getElementsByTagName('img')
//     for(let i=0;i<imgs.length;i++){
//       imgs[i].onerror = function () {
//         this.onerror = null
//         // this.src = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='
//         //debugger
//         this.dataset.src = this.src
//         this.src = ''
//       }
//     }
//   }
// })

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})








