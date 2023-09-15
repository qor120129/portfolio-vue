import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/main.scss'
import loadImage from './plugins/loadImage'

createApp(App)
.use(store)
.use(router)
.use(loadImage)
.mount('#app')
