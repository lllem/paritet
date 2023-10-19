import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Главная',
    },
    component: HomeView
  },
  {
    path: '/equipment-supplies',
    name: 'EquipmentSupplies',
    meta: {
      title: 'Поставки оборудования',
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/rec-supplies',
    name: 'RECSupplies',
    meta: {
      title: 'Поставки РЭК',
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/certificates',
    name: 'Certificates',
    meta: {
      title: 'Сертификаты',
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'О нас',
    },
    component: () => import('../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
