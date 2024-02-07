import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import css from './assets/css/global.css'

createApp(App).use(router).use(css).mount('#app')
