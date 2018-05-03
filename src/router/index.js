import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from '@/pages/home/index'
const Home = () => import('@/pages/home/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'dynamic',
          //对应命名视图路由
          components: {}
        },
      ]
    },
    {
      path: '/gift'
    },
    {
      path: '/community'
    },
    {
      path: '/info'
    }
  ]
})
