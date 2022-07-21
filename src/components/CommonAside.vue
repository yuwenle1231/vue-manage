<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"  :collapse="isCollapse">
  <!-- 判断isCollaspe是否存在（true/false） -->
    <h3  >{{isCollapse ? '后台' : '通用后台管理系统'}}</h3>
    <!-- 导航=> 首页 商品管理 用户管理 -->
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <!-- 导航=> 其他 -->
    <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
        <template slot="title">
            <i :class="`el-icon-`+ item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </template>
        <!-- 其他的下一级        subItem 就是item.children被迭代的数组元素的别名
                                subIndex 即当前项的索引   名字有别而已           -->
        <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem">
            <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
    height: 100%;
    border: none;
    h3{
        color:#fff;
        text-align: center;
        line-height: 48px;
    }
  }
</style>

<script>
  export default {
    name:'CommonAside',
    data() {
      return {
        // isCollapse: false,//控制是否默认展开  这个是写死的，通过vuex在下面写了点击控制它的动态方法
        menu:[
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
      };
    },
    methods: {
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      clickMenu(item){
        this.$router.push({
            name:item.name
        })
      }
    },
    computed:{
        noChildren(){
         return this.menu.filter(item=> !item.children)
        },
        hasChildren(){
          return this.menu.filter(item => item.children)
        },
        // 点击控制它的动态方法   读取数据就是$store.state.xxx
        isCollapse(){
          return this.$store.state.tab.isCollapse
        }
    }
  }
</script>