import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

// TOODO charger le dotenv ici

const app = createApp(App);

app.use(VueAxios, axios)
app.use(BootstrapVue3);
app.mount('#app')
