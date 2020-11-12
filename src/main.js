import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import VueScrollmagic from 'vue-scrollmagic'

import 'vuetify/dist/vuetify.min.css'
import 'swiper/css/swiper.css'

const user = JSON.parse(localStorage.getItem("user"))
store.dispatch("login/VALIDATE", user);
store.dispatch("courses/LOAD_COURSES");

Vue.use(VueRouter) 
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueAwesomeSwiper)
Vue.use(VueScrollmagic)



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

