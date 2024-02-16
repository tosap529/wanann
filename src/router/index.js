import { createRouter, createWebHistory } from 'vue-router'
import header from '@/layouts/header.vue'
import footer from '@/layouts/footer.vue'
// 載入頁面檔
import about from '@/views/about.vue'
import act from '@/views/act.vue'
import article1 from '@/views/article1.vue'
import articles from '@/views/articles.vue'
import bMember from '@/views/bMember.vue'
import caseP from '@/views/case.vue' // 注意case這頁命名有差異
import contact from '@/views/contact.vue'
import forget from '@/views/forget.vue'
import game from '@/views/game.vue'
import gameQ from '@/views/gameQ.vue'
import gameR from '@/views/gameR.vue'
import index from '@/views/index.vue'
import mall from '@/views/mall.vue'
import member from '@/views/member.vue'
import mItem from '@/views/mItem.vue'
import mPay1 from '@/views/mPay1.vue'
import mPay2 from '@/views/mPay2.vue'
import mPay3 from '@/views/mPay3.vue'
import planA from '@/views/planA.vue'
import reserve1 from '@/views/reserve1.vue'
import reserve2 from '@/views/reserve2.vue'
import reserve3 from '@/views/reserve3.vue'
import service from '@/views/service.vue'
import sPay1 from '@/views/sPay1.vue'
import sPay2 from '@/views/sPay2.vue'
import sPay3 from '@/views/sPay3.vue'
import welcome from '@/views/welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { hideDefault: true }, // 如果不需要預設的header, footer，此處需填true
      components: { default: index }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      meta: { hideDefault: true }, // 如果不需要預設的header, footer，此處需填true
      components: { default: about }
    },
    {
      path: '/act',
      name: 'act',
      meta: { hideDefault: false },
      components: { default: act, header: header, footer: footer }
    },
    {
      path: '/article1',
      name: 'article1',
      meta: { hideDefault: false },
      components: { default: article1, header: header, footer: footer }
    },
    {
      path: '/articles',
      name: 'articles',
      meta: { hideDefault: false },
      components: { default: articles, header: header, footer: footer }
    },
    {
      path: '/bMember',
      name: 'bMember',
      meta: { hideDefault: true },
      components: { default: bMember }
    },
    {
      path: '/case',
      name: 'case',
      meta: { hideDefault: false },
      components: { default: caseP, header: header, footer: footer }
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { hideDefault: false },
      components: { default: contact, header: header, footer: footer }
    },
    {
      path: '/forget',
      name: 'forget',
      meta: { hideDefault: false },
      components: { default: forget, header: header, footer: footer }
    },
    {
      path: '/game',
      name: 'game',
      meta: { hideDefault: false },
      components: { default: game, header: header, footer: footer }
    },
    {
      path: '/gameQ',
      name: 'gameQ',
      meta: { hideDefault: false },
      components: { default: gameQ, header: header, footer: footer }
    },
    {
      path: '/gameR',
      name: 'gameR',
      meta: { hideDefault: false },
      components: { default: gameR, header: header, footer: footer }
    },
    {
      path: '/mall',
      name: 'mall',
      meta: { hideDefault: false },
      components: { default: mall, header: header, footer: footer }
    },
    {
      path: '/member',
      name: 'member',
      meta: { hideDefault: false },
      components: { default: member, header: header, footer: footer }
    },
    {
      path: '/mItem',
      name: 'mItem',
      meta: { hideDefault: false },
      components: { default: mItem, header: header, footer: footer }
    },
    {
      path: '/mPay1',
      name: 'mPay1',
      meta: { hideDefault: false },
      components: { default: mPay1, header: header, footer: footer }
    },
    {
      path: '/mPay2',
      name: 'mPay2',
      meta: { hideDefault: false },
      components: { default: mPay2, header: header, footer: footer }
    },
    {
      path: '/mPay3',
      name: 'mPay3',
      meta: { hideDefault: false },
      components: { default: mPay3, header: header, footer: footer }
    },
    {
      path: '/planA',
      name: 'planA',
      cmeta: { hideDefault: false },
      components: { default: planA, header: header, footer: footer }
    },
    {
      path: '/reserve1',
      name: 'reserve1',
      meta: { hideDefault: false },
      components: { default: reserve1, header: header, footer: footer }
    },
    {
      path: '/reserve2',
      name: 'reserve2',
      meta: { hideDefault: false },
      components: { default: reserve2, header: header, footer: footer }
    },
    {
      path: '/reserve3',
      name: 'reserve3',
      meta: { hideDefault: false },
      components: { default: reserve3, header: header, footer: footer }
    },
    {
      path: '/service',
      name: 'service',
      meta: { hideDefault: false },
      components: { default: service, header: header, footer: footer }
    },
    {
      path: '/sPay1',
      name: 'sPay1',
      meta: { hideDefault: false },
      components: { default: sPay1, header: header, footer: footer }
    },
    {
      path: '/sPay2',
      name: 'sPay2',
      meta: { hideDefault: false },
      components: { default: sPay2, header: header, footer: footer }
    },
    {
      path: '/sPay3',
      name: 'sPay3',
      meta: { hideDefault: false },
      components: { default: sPay3, header: header, footer: footer }
    },
    {
      path: '/welcome',
      name: 'welcome',
      meta: { hideDefault: true },
      components: { default: welcome }
    },


  ]
})

export default router
