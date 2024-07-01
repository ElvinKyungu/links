<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BtnPrimary from '../base/BtnPrimary.vue'
import NavBar from '../base/NavBar.vue'
import gsap from 'gsap'

// Références pour les éléments à animer
const titleRef = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animation du titre
  gsap.from(titleRef.value, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power2.out'
  })

  // Animation du paragraphe
  gsap.from(paragraphRef.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    delay: 0.5
  })
})
</script>
<template>
  <header class="bg-header bg-cover bg-center h-[96vh] -mt-30 md:mt-0">
    <NavBar />
    <div class="px-10 md:px-20 lg:px-40 my-36">
      <h1 ref="titleRef" class="text-white text-4xl md:5xl lg:text-7xl font-bold md:flex md:flex-col md:gap-6">
        <span>Logistics and Escorts</span>
        <span class="pl-1 md:pl-0">Services Provider</span>
      </h1>
      <p ref="paragraphRef" class="flex flex-col gap-1 text-xl text-white my-10">
        <span>We Provide a wide range of Logistics, Escort &</span>
        <span>Tracking Services for several companies.</span>
      </p>
      <router-link to="/" class="mb-3">
        <BtnPrimary text="Discover Our Services"/>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
</style>
