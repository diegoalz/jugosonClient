import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import router from "./router"
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router, axios, VueAxios).mount('#app')
