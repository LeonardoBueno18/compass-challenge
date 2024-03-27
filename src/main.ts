import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store'
import router from './router/router'

createApp(App)
    .use(store, key)
    .use(router)
    .mount('#app')
