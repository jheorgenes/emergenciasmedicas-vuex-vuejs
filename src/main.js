import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //Vuex

const Vue = createApp(App)
Vue.use(router)
Vue.use(store) //Vuex
Vue.mount('#app')
