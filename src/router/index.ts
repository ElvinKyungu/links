import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import services from '@/views/Services.vue'
import EscortsTracking from '@/views/EscortsTracking.vue'
import transport from '@/views/TransportService.vue'
import ServicesOperation from '@/views/ServicesOperation.vue'
import ServicesLogistic from '@/views/ServiceLogistic.vue'
import ServicesTransport from '@/views/ServicesTransport.vue'
import ServicesSupply from '@/views/ServicesSupply.vue'

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
    {
      path: '/transport',
      name: 'transport',
      component: transport
    },
    {
      path: '/services-operation',
      name: 'ServicesOperation',
      component: ServicesOperation
    }
    ,
    {
      path: '/services-logistic',
      name: 'ServicesLogistic',
      component: ServicesLogistic
    }
    ,
    {
      path: '/services-transport',
      name: 'ServicesTransport',
      component: ServicesTransport
    }
    ,
    {
      path: '/services-supply',
      name: 'ServicesSupply',
      component: ServicesSupply
    }
  ]
})

export default router
