import Vue from 'vue';
import VueRouter from 'vue-router'
import router from 'javascripts/router';
import App from 'vuesrc/app';

Vue.config.productionTip = false

new Vue({
  router,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#vue-app');


