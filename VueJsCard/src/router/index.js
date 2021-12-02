import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Info from '@/views/Info'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
