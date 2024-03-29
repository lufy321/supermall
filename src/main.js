import { createApp } from 'vue'
import App from './App.vue'
import router from  './router'

// Vue.prototype.$bus = new Vue()

const app = createApp(App)

app.use(router)

app.mount('#app')
