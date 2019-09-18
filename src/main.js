import Vue from 'vue';
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueRoter from 'vue-router'
Vue.use(VueRoter);
import VueResource from 'vue-resource'
Vue.use(VueResource)
import router from './router.js'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router:router
})
