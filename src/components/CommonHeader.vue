<template>
  <header>
    <div class="l-content">
        <!-- plain 纯色的 -->
        <el-button @click="handleMenu" plain icon="el-icon-menu" sizi="mini"></el-button>
        <!-- 面包屑 -->
        <el-breadcrumb separator=">">
            <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }" >{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img class="user" :src="userImg" >
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex' // 借助mapState生成计算属性
export default {
    name:'CommonHeader',
    data() {
        return {
            // 在vue的js引⼊图⽚，就需要使⽤require(“路径”)进来
            userImg:require('../assets/images/user.png')
        }
    },
    methods: {
        handleMenu(){
            this.$store.commit('collapseMenu')
        },
        logOut(){
            this.$store.commit('clearToken')
            this.$store.commit('clearMenu')
            this.$router.push('/login')
        }
    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabsList
        }),
    }
}
</script>

<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;  //左右贴边 且各个元素等距间隔
    align-items: center; //上下居中
}
.l-content{
    color:#00F;
    display: flex;
    align-items: center; //上下居中
    .el-button{
        margin-right: 20px;
    }
}
.r-content{
    .user{
        width: 40px;
        height: 40px;
        border-radius: 50%; //圆形
    }
}
</style>