import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Main,Header,Aside,Menu,MenuItem,MenuItemGroup,Submenu,Dropdown,DropdownItem,DropdownMenu} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router'


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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
