import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import Info from '@/views/Info'
import Register from '@/views/Register'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Список ToDo'
    },
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    meta: {
      title: 'О разработчике'
    },
    component: Info
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Авторизация'
    },
    component: Login
  },
  {
    path: '/register',
    name: 'registration',
    meta: {
      title: 'Регистрация'
    },
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { accessToken } = localStorage // тут происходит десруктуризация по сути это тож самое что const accessToken = localStorage.accessToken
  if (
    (!accessToken && ['login', 'registration'].includes(to.name)) ||
    (accessToken && !['login', 'registration'].includes(to.name))
  ) {
    next()
  } else if ((!accessToken && !['login', 'registration'].includes(to.name))) {
    next('/login')
  }
})

export default router
