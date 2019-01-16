import Vue from 'vue'
import {
  Button,
  IndexList,
  Tip,
} from 'cube-ui';
// import vueLazyload from 'vue-lazyload'
import 'src/directive/img_reload.js'
import clipboard from 'clipboard'
new clipboard('.clipboard-btn');
Vue.use(Tip)
Vue.use(Button)
Vue.use(IndexList)








