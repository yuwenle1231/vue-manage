export default {
    state:{
        isCollapse:false,   //默认是否展开
        tabsList:[
            {
                path:'/home',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ],
        currentMenu:null //为tag是否高亮准备
    },
    mutations:{
        //侧边栏是否展开
        collapseMenu(state){
            state.isCollapse = !state.isCollapse 
        },
        selectMenu(state,val){
            if(val.name !== 'home'){ //判断是否为首页
                state.currentMenu = val
               const result = state.tabsList.findIndex(item => item.name === val.name) //用这个方法判断tabsList是否存在
               if(result === -1){
                    state.tabsList.push(val)
               }
            }else{
                state.currentMenu = null //重置
            }
        },
        closeTag(state,val){
        const result = state.tabsList.findIndex(item => item.name === val.name)
        state.tabsList.splice(result,1)
        }
    }
}