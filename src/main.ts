import './assets/css/main.css';

// // Initialization for ES Users
// import { Dropdown, Ripple, initTE } from "tw-elements";
// initTE({ Dropdown, Ripple });

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
