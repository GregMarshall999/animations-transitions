import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, 
    {
      path: '/about', 
      name: 'About', 
      component: About
    }, 
    {
      path: '/contact', 
      name: 'Contact', 
      component: Contact
    }
  ],
})

export default router
