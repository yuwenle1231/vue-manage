<template>
  <header>
    <div class="l-content">
        <!-- plain 纯色的 -->
        <el-button plain icon="el-icon-menu" sizi="mini"></el-button>
        <h3 style="color:#fff">首页</h3>
    </div>
    <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img class="user" :src="userImg" >
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
    name:'CommonHeader',
    data() {
        return {
            // 在vue的js引⼊图⽚，就需要使⽤require(“路径”)进来
            userImg:require('../assets/images/user.png')
        }
    },
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