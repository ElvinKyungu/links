<script setup lang="ts">
import BtnPrimary from '@/components/base/BtnPrimary.vue';
</script>
<template>
  <section class="bg-secondary flex items-center justify-center w-full h-screen ">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
          404
        </h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl">
          Something's missing.
        </p>
        <p class="mb-4 text-lg font-light text-gray-200">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <router-link 
          to="/" 
          class=""
        >
          <BtnPrimary text="Back home"/>
        </router-link>
      </div>
    </div>
  </section>
</template>