import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  
  // 原先的沒有刪除
  //history: createWebHistory(import.meta.env.BASE_URL),

  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/about.vue')
    },
    {
      path: '/act',
      name: 'act',
      component: () => import('@/views/act.vue')
    },
    {
      path: '/article1',
      name: 'article1',
      component: () => import('@/views/article1.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('@/views/articles.vue')
    },
    {
      path: '/cms',
      name: 'cms',
      component: () => import('@/views/cms.vue')
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('@/views/case.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('@/views/forget.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/game.vue')
    },
    {
      path: '/gameQ',
      name: 'gameQ',
      component: () => import('@/views/gameQ.vue')
    },
    {
      path: '/gameR',
      name: 'gameR',
      component: () => import('@/views/gameR.vue')
    },
    {
      path: '/mall',
      name: 'mall',
      component: () => import('@/views/mall.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('@/views/member.vue')
    },
    {
      path: '/mItem/:productId',
      name: 'mItem',
      component: () => import('@/views/mItem.vue')
    },
    {
      path: '/mPay1',
      name: 'mPay1',
      component: () => import('@/views/mPay1.vue')
    },
    {
      path: '/mPay2',
      name: 'mPay2',
      component: () => import('@/views/mPay2.vue')
    },
    {
      path: '/mPay3',
      name: 'mPay3',
      component: () => import('@/views/mPay3.vue')
    },
    {
      path: '/planA',
      name: 'planA',
      component: () => import('@/views/planA.vue')
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: () => import('@/views/reserve.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/views/service.vue')
    },
    {
      path: '/sPay1',
      name: 'sPay1',
      component: () => import('@/views/sPay1.vue')
    },
    {
      path: '/sPay2',
      name: 'sPay2',
      component: () => import('@/views/sPay2.vue')
    },
    {
      path: '/sPay3',
      name: 'sPay3',
      component: () => import('@/views/sPay3.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/welcome.vue')
    },
    //後台展示頁面先放
    {
      path: '/cms',
      name: 'cms',
      component: () => import('@/views/cms.vue')
    }

  ]
})

export default router
