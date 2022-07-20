import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history', //另一个是hash模式
    routes:[
        {
            path:'/',
            name:'Main',
            component:()=> import('../views/Main.vue') ,
            children:[
                {
                    path:'/home',
                    name:'home',
                    component:()=> import('../views/home')  //写到home就行，后面默认去找index
                },
                {
                    path:'/user',
                    name:'user',
                    component:()=> import('../views/User')
                }
            ]
        },
        
    ]
})
