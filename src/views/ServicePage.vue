<template>
  <HeaderService :serviceName="serviceData.title" />
  <section class="grid grid-cols-1 md:flex justify-between w-full relative gap-6 mt-20 px-5 sm:px-10 md:px-20 lg:px-40">
    <div class="w-full">
      <h3 class="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Discover our</h3>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mt-4">{{ serviceData.title }}</h1>
      <p class="text-xl mt-10">{{ serviceData.description }}</p>
      <ul class="mt-5 flex flex-col gap-4 text-xl">
        <li v-for="(item, index) in serviceData.list" :key="index" class="flex gap-3 items-center">
          <span class="w-5 h-5 rounded-full bg-primary"></span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="w-full bg-gray-100 px-7 py-10 rounded-lg">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary mt-4">Other Services</h2>
      <div class="h-3 w-1/5 bg-primary"></div>
      <ul class="flex flex-col gap-3 text-xl mt-5 font-medium">
        <li 
          v-for="(service, key) in services"
          :key="key"
          :class="{ 'text-primary font-bold': key === currentService }"
        >
          <router-link :to="'/service/' + key" class="flex items-center gap-3">
            <IconRightService/>
            <span>{{ service.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
  <DownloadCards/>
  <Footer/>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { services } from '@/data/services'
import HeaderService from '@/components/services/HeaderService.vue'
import Footer from '@/components/base/Footer.vue'
import DownloadCards from '@/components/services/DownloadCards.vue'
import IconRightService from '@/components/icons/IconRightService.vue'

const route = useRoute()
const router = useRouter()
const serviceData = ref({
  title: '',
  description: '',
  list: [] as string[]
})
const currentService = ref<string>('')

watchEffect(() => {
  const serviceName = route.params.serviceName as keyof typeof services
  if (services[serviceName]) {
    serviceData.value = services[serviceName]
    currentService.value = serviceName
  } else {
    console.error(`Service '${serviceName}' not found`)
  }
})

</script>

<style scoped>
</style>
