import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //Vuex

// json-server --watch bd.json --port 3001

const Vue = createApp(App)
Vue.use(router)
Vue.use(store) //Vuex
Vue.mount('#app')
