import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueTheMask from 'vue-the-mask';

import Header from '@/components/Header.vue';

Vue.config.productionTip = false;

window.addEventListener('load', function() {
  setTimeout(function() {
    window.scrollTo(0, 1);
  }, 0);
});

Vue.component('Header', Header);

Vue.use(VueTheMask);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
