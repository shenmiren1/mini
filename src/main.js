import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store/index'
import App from './App.vue'
// import env from './env'

// mock开关
const mock = false;
if(mock){
  require('./mock/api');
}
// 根据前端的跨域方式做调整
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c7f99f188e28e3357e28eb4/example';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data;
  }else if(res.status ==10){
    if(path != '#/index'){
      window.location.href='/#/login'; 
    }
   
  }else{
    alert(res.msg);
    return Promise.reject(res);
  }
})

Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
