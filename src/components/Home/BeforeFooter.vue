<script setup lang="ts">
  import BtnPrimary from '../base/BtnPrimary.vue'
  import { useGsapAnimation } from '@/composables/useGsapAnimation'
  const paragraphRef = useGsapAnimation(50, 1, 0.1)
  const titleRef = useGsapAnimation(-50, 1, 0.5)
</script>

<template>
  <div class="bg-afterFooter h-96 gap-6 flex justify-center items-center flex-col">
    <h1 
      class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary"
      ref="titleRef"
    >
      Need to work with us?
    </h1>
    <p class="text-lg md:text-xl  text-white mb-5 px-10 text-center" ref="paragraphRef">
      We are always getting extra miles to serve you better.
    </p>
    <BtnPrimary text="Get In Touch With  Us"/>
  </div>
</template>