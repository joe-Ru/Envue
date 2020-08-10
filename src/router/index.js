import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "Login"
            }
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
