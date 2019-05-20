import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '../components/AboutMe'
import Portfolio from '../components/Portfolio'
import Technology from '../components/Technology'
import Contact from '../components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'',redirect:'/aboutme'},
    {path:'/aboutme',component:AboutMe},
    {path:'/portfolio',component:Portfolio},
    {path:'/technology',component:Technology},
    {path:'/contact',component:Contact},
    
  ]
})
