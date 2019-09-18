import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContiamer from './components/tabbar/SearchContiamer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import newsList from './components/news/NewsList.vue'
import newsInfo from './components/news/NewsInfo.vue'

var router =new VueRouter({
    routes:[
        {path:'/',redirect:'/home'}, 
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContiamer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/home/newsList',component:newsList},
        {path:'/home/newsinfo/:id',component:newsInfo}
    ],  
    linkActiveClass:'mui-active'
});
export default router;