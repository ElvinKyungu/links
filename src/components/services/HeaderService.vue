<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '../base/NavBar.vue'

const props = defineProps<{ serviceName: string }>()

const route = useRoute()

const displayName = computed(() => {
  if (route.path === '/services') {
    return 'Services'
  } else if (route.path === '/escorts') {
    return 'Escorts'
  } else {
    return props.serviceName
  }
})
</script>

<template>
  <header class="bg-logisticSolution bg-cover bg-center h-[70vh] -mt-30 md:mt-0">
    <NavBar />
    <div class="px-10 md:px-20 lg:px-40 my-36">
      <h1 class="text-gray-500 uppercase text-center text-2xl md:3xl lg:text-4xl">
        Discover our
      </h1>
      <h1 class="text-white text-center text-4xl md:5xl lg:text-7xl font-bold">
        {{ displayName }}
      </h1>
    </div>
  </header>
</template>

<style scoped>
</style>
