import './assets/css/main.css';
//font awsome js. css in app.scss
import '@fortawesome/fontawesome-free/js/all';


import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
