import Vue from 'vue';
import VueRouter from 'vue-router'
import router from 'javascripts/router';
import App from 'vuesrc/app';

import {store} from 'vuesrc/store/store';

Vue.config.productionTip = false

// Vue instance 

new Vue({
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#vue-app');


