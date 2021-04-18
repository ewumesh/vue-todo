/* eslint-disable eol-last */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// createApp.use(Vuetify)

createApp(App).use(store).use(router).mount('#app')