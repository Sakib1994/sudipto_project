import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'http://RgadApi-env.eba-knt3svpm.us-east-1.elasticbeanstalk.com';
//axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
//axios.defaults.headers.common['Content-Type'] = 'application/json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
