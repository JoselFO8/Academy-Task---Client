import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import storage from './storage'

/**
 * Api baseURL
 */
// axios.defaults.baseURL = 'http://54.242.120.40:3000/'

createApp(App).use(router).use(storage).use(VueAxios, axios).mount('#app')
