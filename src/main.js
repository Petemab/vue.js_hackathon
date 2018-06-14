import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './assets/scss/style.scss';

// Vue.config.productionTip = false;

Vue.use(VueRouter);
import Home from './components/Home';
import PlacesIndex from './components/PlacesIndex';
import PlacesNew from './components/PlacesNew';
import PlacesShow from './components/PlacesShow';



const routes = [
  { path: '/' , component: Home },
  { path: '/places' , component: PlacesIndex },
  { path: '/places/new' , component: PlacesNew },
  { path: '/places/:id' , component: PlacesShow }


];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
