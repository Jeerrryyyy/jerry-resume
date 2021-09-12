import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './plugins/router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1500,
  easing: 'ease-in-out',
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
