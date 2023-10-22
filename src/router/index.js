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
    component: () => import('../views/EquipmentSuppliesView.vue')
  },
  {
    path: '/rec-supplies',
    name: 'RECSupplies',
    meta: {
      title: 'Поставки РЭК',
    },
    component: () => import('../views/RecSuppliesView.vue')
  },
  {
    path: '/certificates',
    name: 'Certificates',
    meta: {
      title: 'Сертификаты',
    },
    component: () => import('../views/CertificatesView.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'О нас',
    },
    component: () => import('../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {top: 0}
  },
})

export default router
