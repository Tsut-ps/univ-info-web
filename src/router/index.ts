import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/access',
      name: 'access',
      component: () => import('../views/Access.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/document',
      name: 'document',
      component: () => import('../views/Document.vue')
    }
  ],
  /* 遷移時にトップへスクロール */
  scrollBehavior(to, from, savedPosition) {
    /* 遷移から戻ったときはスクロールした場所まで戻る */
    if (savedPosition) return savedPosition
    /* 一番上まで移動 */
    else return { top: 0 }
  }
})

export default router
