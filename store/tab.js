export default {
    state:{
        isCollapse:false   //默认是否展开
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse 
        }
    }
}