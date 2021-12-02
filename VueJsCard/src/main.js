import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Client from './api/client'
const app = createApp(App).use(router).mount('#app')
app.config.globalProperties.$hostname = process.env.API_DOMAIN
app.config.globalProperties.$client = Client
