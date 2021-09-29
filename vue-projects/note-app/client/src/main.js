import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

const app = createApp(App).use(store).use(router)

// Load token from localStorage
app.config.globalProperties.$http = axios;
const token = localStorage.getItem("token");
// If token then append default axios authorisation headers
if (token) {
    app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token;
}

app.mount('#app');
