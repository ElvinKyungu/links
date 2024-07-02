import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import services from '@/views/Services.vue'
import EscortsTracking from '@/views/EscortsTracking.vue'
import ServicePage from '@/views/ServicePage.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/escorts',
      name: 'escorts',
      component: EscortsTracking
    },
    { path: '/service/:serviceName', 
      name: 'Service', component: ServicePage 
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

  ]
})

export default router
