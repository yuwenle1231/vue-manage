import Vue from 'vue'
import App from './App.vue'
import {
  Button, Radio, Container, Main, Header, Aside, Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, 
  DropdownItem, DropdownMenu, Row, Card, Col, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form,
  FormItem,Input,Select,Switch,DatePicker,Option,Dialog,Pagination,MessageBox,Message
} from 'element-ui';
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
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Option);
Vue.use(Dialog);
Vue.use(Pagination);
//绑定http
Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
