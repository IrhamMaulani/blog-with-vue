import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Routes from './routes'
import {
  firestorePlugin
} from 'vuefire'



Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

Vue.use(firestorePlugin);



//filter

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + ' ... ';
})

//endfilter

new Vue({
  store,
  vuetify,
  render: function (h) {
    return h(App)
  },
  router: router
}).$mount('#app')