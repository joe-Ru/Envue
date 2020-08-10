import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

Vue.config.productionTip = false
Vue.prototype.$authenticated = false;
Vue.prototype.$mockAccount = {
  password: 'password',
  username: 'somename'
}

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
