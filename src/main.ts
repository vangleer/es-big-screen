import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import * as store from '@/store'
import '@/assets/css/index.scss'
createApp(App).use(store).use(router).mount('#app')
