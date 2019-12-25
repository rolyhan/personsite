import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/menu'
import video from '@/components/video'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'menu',
    //   // component:iswiper
    //   component:  () => import('@/components/menu')
    // },
    {
      path: '/',
      components:{
        menu,
        video,
      },
    },
  ]
})
