import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import * as store from '@/store'
import * as chart from './components/chart'
import '@/assets/css/index.scss'
import 'element-plus/dist/index.css'
createApp(App).use(chart).use(store).use(router).mount('#app')
