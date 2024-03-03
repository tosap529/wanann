import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({



  // 原先的沒有刪除
  history: createWebHistory(import.meta.env.BASE_URL),

  // history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Welcome 浣安居家清潔服務' },
      component: () => import('@/views/welcome.vue'),
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: '浣安－最安心的居家清潔服務' },
      component: () => import('@/views/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: '浣安 | 關於我們' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/about.vue')
    },
    {
      path: '/act',
      name: 'act',
      meta: { title: '浣安 | 活動專區' },
      component: () => import('@/views/act.vue')
    },
    {
      path: '/article1',
      name: 'article1',
      meta: { title: '浣安 | 文章標題' },
      component: () => import('@/views/article1.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      meta: { title: '浣安 | 專欄文章' },
      component: () => import('@/views/articles.vue')
    },
    {
      path: '/case',
      name: 'case',
      meta: { title: '浣安 | 案例分享' },
      component: () => import('@/views/case.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { title: '浣安 | 聯絡我們' },
      component: () => import('@/views/contact.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      meta: { title: '浣安 | 重設密碼' },
      component: () => import('@/views/forget.vue')
    },
    {
      path: '/game',
      name: 'game',
      meta: { title: '浣安 | 浣安森林' },
      component: () => import('@/views/game.vue')
    },
    {
      path: '/gameQ',
      name: 'gameQ',
      meta: { title: '浣安 | 浣安森林' },
      component: () => import('@/views/gameQ.vue')
    },
    {
      path: '/gameRb',
      name: 'gameRb',
      meta: { title: '浣安 | 浣安森林' },
      component: () => import('@/views/gameRb.vue')
    },
    {
      path: '/gameRf',
      name: 'gameRf',
      meta: { title: '浣安 | 浣安森林' },
      component: () => import('@/views/gameRf.vue')
    },
    {
      path: '/gameRj',
      name: 'gameRj',
      meta: { title: '浣安 | 浣安森林' },
      component: () => import('@/views/gameRj.vue')
    },
    {
      path: '/gameRt',
      name: 'gameRt',
      meta: { title: '浣安 | 浣安森林' },
      component: () => import('@/views/gameRt.vue')
    },
    {
      path: '/mall',
      name: 'mall',
      meta: { title: '浣安 | 商城' },
      component: () => import('@/views/mall.vue')
    },
    {
      path: '/member',
      name: 'member',
      meta: { title: '浣安 | 會員中心' },
      component: () => import('@/views/member.vue')
    },
    {
      path: '/mItem/:productId',
      name: 'mItem',
      meta: { title: '浣安 |' },
      component: () => import('@/views/mItem.vue')
    },
    {
      path: '/mPay1',
      name: 'mPay1',
      meta: { title: '浣安 | 商品結帳－訂單確認' },
      component: () => import('@/views/mPay1.vue')
    },
    {
      path: '/mPay2',
      name: 'mPay2',
      meta: { title: '浣安 | 商品結帳－資料填寫' },
      component: () => import('@/views/mPay2.vue')
    },
    {
      path: '/mPay3',
      name: 'mPay3',
      meta: { title: '浣安 | 商品結帳－訂單成立' },
      component: () => import('@/views/mPay3.vue')
    },
    {
      path: '/plan',
      name: 'plan',
      meta: { title: '浣安 | 服務介紹－浣安全室清潔' },
      component: () => import('@/views/plan.vue')
    },
    {
      path: '/reserve',
      name: 'reserve',
      meta: { title: '浣安 | 預約服務' },
      component: () => import('@/views/reserve.vue')
    },
    {
      path: '/service',
      name: 'service',
      meta: { title: '浣安 | 服務介紹' },
      component: () => import('@/views/service.vue')
    },
    {
      path: '/sPay1',
      name: 'sPay1',
      meta: { title: '浣安 | 服務結帳－訂單確認' },
      component: () => import('@/views/sPay1.vue')
    },
    {
      path: '/sPay2',
      name: 'sPay2',
      meta: { title: '浣安 | 服務結帳－資料填寫' },
      component: () => import('@/views/sPay2.vue')
    },
    {
      path: '/sPay3',
      name: 'sPay3',
      meta: { title: '浣安 | 服務結帳－訂單成立' },
      component: () => import('@/views/sPay3.vue')
    },
    //後台展示頁面先放
    {
      path: '/cms',
      name: 'cms',
      meta: { title: '浣安 | 後台' },
      component: () => import('@/views/cms.vue')
    },
    //後台登入頁
    {
      path: '/backLogin',
      name: 'backLogin',
      meta: { title: '浣安 | 後台' },
      component: () => import('@/views/backLogin.vue')
    },

  ]
})

export default router
router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to && to.meta && to.meta.title) {
    document.title = to.meta.title;

  }
  next();
});