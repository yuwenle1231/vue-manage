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
                    component:()=> import('../views/home')  //写到home就行，后面默认去找index  这种叫按需引入
                },
                {
                    path:'/user',
                    name:'user',
                    component:()=> import('../views/User')
                },
                {
                    path:'/mall',
                    name:'mall',
                    component:()=> import('../views/mall')
                },
                {
                    path:'/page1',
                    name:'page1',
                    component:()=> import('../views/other/pageOne')
                },
                {
                    path:'/page2',
                    name:'page2',
                    component:()=> import('../views/other/pageTwo')
                }
            ]
        },
        
    ]
})
