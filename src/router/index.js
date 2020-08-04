import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Volunteers from '@/components/Volunteers'
import Opportunities from '@/components/Opportunities'

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
    },
    {
      path: '/volunteers',
      name:'Volunteers',
      component: Volunteers
      
    },
    {
      path: '/opportunities',
      name:'Opportunities',
      component: Opportunities
      
    },
    {
      path:'*',
      name: 'Login',
      component: Login
    },
    
  ]
})
