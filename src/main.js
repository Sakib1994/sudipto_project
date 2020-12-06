import axios from "axios";
import Chart from "chart.js";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontSize = 17;

axios.defaults.baseURL ="/api";
axios.defaults.baseURL ="http://rgadapi-env.eba-knt3svpm.us-east-1.elasticbeanstalk.com/api";
//axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
//axios.defaults.headers.common['Content-Type'] = 'application/json';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
