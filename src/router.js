import Vue from 'vue'
import VueRouter from 'vue-router'
//模块化必须使用Vue.use来加载路由的功能
Vue.use(VueRouter)

//home组件
import Home from './components/Home/home.vue'

//

//定义路由
const routes = [
    { path: '/home', component: Home,name:'home' },
    //重定向
    // {path: '/',redirect: /home/one}
]

//实例化路由
const router = new VueRouter({
    routes
});


//暴露路由，为后续挂载做准备
export default router