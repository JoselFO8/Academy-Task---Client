import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
// import '@mdi/js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import storage from './storage'

createApp(App).use(router).use(storage).use(VueAxios, axios).mount('#app')
