<script setup lang="ts">
  import logo from '@/assets/logo_white.png'
  import BtnPrimary from './BtnPrimary.vue'
</script>

Script
<template>
  <header class="bg-header bg-cover bg-center h-[90vh]">
    <nav class="flex justify-between border-b text-white items-center py-4 px-20">
      <router-link to="/">
        <img :src="logo" class="w-40" alt="">
      </router-link>
      <ul class="flex gap-8 items-center text-xl">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">Logistics & Solution</router-link>
        </li>
        <li>
          <router-link to="/">Escort & Tracking</router-link>
        </li>
        <li>
          <router-link to="/">
            <BtnPrimary text="Contact Us"/>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="lg:px-40 my-36">
      <h1 class="text-white text-7xl font-bold flex flex-col gap-6">
        <span>Logistics and Escorts</span>
        <span>Services Provider</span>
      </h1>
      <p class="flex flex-col gap-1 text-xl text-white my-10">
        <span>
          We Provide a wide range of Logistics, Escort &
        </span>
        <span>Tracking Services for several companies.</span>
      </p>
      <router-link to="/">
        <BtnPrimary text="Discover Our Services"/>
      </router-link>
    </div>
  </header>
</template>