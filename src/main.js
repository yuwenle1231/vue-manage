import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Main,Header,Aside,Menu,MenuItem,MenuItemGroup,Submenu,Dropdown,DropdownItem,DropdownMenu,Row,Card,Col,Table,TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock.js'


import './assets/less/index.less'  //一些字体样式 外部引入

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Radio);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Row);
Vue.use(Card);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
//绑定http
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
