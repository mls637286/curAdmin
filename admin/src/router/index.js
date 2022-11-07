import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layouts/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/RealTime/index'),
        meta: {
          title: '首页',
          access: 0,
          affix: true
        }
      },
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
