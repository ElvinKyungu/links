<script setup lang="ts">
import BtnPrimary from '../base/BtnPrimary.vue'
import NavBar from '../base/NavBar.vue';
</script>

<template>
  <header class="bg-header bg-cover bg-center h-[90vh] -mt-30 md:mt-0">
    <NavBar />
    <div class="px-10 md:px-20 lg:px-40 my-36">
      <h1 class="text-white text-4xl md:5xl lg:text-7xl font-bold md:flex md:flex-col md:gap-6">
        <span>Logistics and Escorts</span>
        <span class="pl-1 md:pl-0">Services Provider</span>
      </h1>
      <p class="flex flex-col gap-1 text-xl text-white my-10">
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
