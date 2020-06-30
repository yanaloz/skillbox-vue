import Vue from 'vue';
import App from './App.vue';
import { stringHi, stringHello } from './data/strings';
import alertMessage from './data/alert';

alertMessage(stringHello);
alertMessage(stringHi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
