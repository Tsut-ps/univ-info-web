import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Access from '../views/Access.vue'
import Contact from '../views/Contact.vue'
import Document from '../views/Document.vue'
import NotFound from '../views/NotFound.vue'

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
      component: Access
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/document',
      name: 'document',
      component: Document
    },
    {
      path: '/:matchAll(.*)',
      name: 'not-found',
      component: NotFound
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
