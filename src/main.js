import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Routes from './routes'
import {
  firestorePlugin
} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

Vue.use(firestorePlugin);
firebase.initializeApp({
  projectId: 'learn-vue-db76a',
  databaseURL: 'https://learn-vue-db76a.firebaseio.com/'
});
export const db = firebase.firestore()

new Vue({
  store,
  vuetify,
  render: function (h) {
    return h(App)
  },
  router: router
}).$mount('#app')