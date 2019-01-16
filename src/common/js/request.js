import axios from 'axios'
import Vue from 'vue'
// create an axios instance

axios.defaults.retry = 3;
axios.defaults.retryDelay = 1000;

const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    //console.log('request')
    return config
  },
  error => {
    //console.log('err' + error)
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    let res = response.data

    if (res.status == 1021) {
      let toast = Vue.component('cube-toast')
      res.info = '请先登录'
      toast.extendOptions.$create({
        time: 300000,
        type: 'warn',
        mask: true,
        txt: res.info
      }).show()
      // localStorage.removeItem('login')
      // if(!response.config.checkToken){
      //   location.reload()
      // }else{
      //   let toast = Vue.component('cube-toast')
      //   res.info = '请先登录'
      //   toast.extendOptions.$create({
      //     time: 300000,
      //     type: 'warn',
      //     mask: true,
      //     txt: res.info
      //   }).show()
      // }
      return Promise.reject(res)
    }
    if (res.status == 1 || res.success == 1) {
      return response.data
    } else {
      return Promise.reject(res)
    }
  },
  err => {
    // console.log('err' + error)
    // return Promise.reject(error)
    //超时重发


    var config = err.config;

    if(err.code == 'ECONNABORTED' && err.message.indexOf('timeout')!=-1){
      if(!config || !config.retry) return Promise.reject(err);

      config.__retryCount = config.__retryCount || 0;

      if(config.__retryCount >= config.retry) {
        err.info = '网络超时,请退出重试'
        return Promise.reject(err);
      }

      config.__retryCount ++;

      //console.log(config.retryDelay)
      let backoff = new Promise(function(resolve) {
        setTimeout(function() {
          resolve();
        }, config.retryDelay || 1000);
      });

      // Return the promise in which recalls axios to retry the request
      return backoff.then(function() {
        return service(config);
      });
    }
    return Promise.reject(err)



  }
)

export default service
