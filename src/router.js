import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContiamer from './components/tabbar/SearchContiamer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

var router =new VueRouter({
    routes:[
        {path:'/',redirect:'/home'}, 
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContiamer},
        {path:'/shopcar',component:ShopcarContainer}
    ],  
    linkActiveClass:'mui-active'
});
export default router;