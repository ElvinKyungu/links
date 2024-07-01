<script setup lang="ts">
import { useGsapAnimation } from '@/composables/useGsapAnimation'
const paragraphRef = useGsapAnimation(50, 1, 0.1)
const titleRef = useGsapAnimation(-50, 1, 0.5)
const subtitleRef = useGsapAnimation(70, 1, 0.5)
</script>
<template>
  <div class="mx-10 md:mx-20 lg:mx-40 my-40">
    <h1 class="capitalize text-4xl text-center font-semibold mb-5" ref="titleRef">About Us</h1>
    <h3 class="uppercase  text-[#828282] text-center text-xl" ref="subtitleRef">Know more about our company</h3>
    <div class="grid col-span-1 md:flex justify-between w-full gap-6 my-10">
      <div class="bg-[#D9D9D9] rounded-md w-full md:w-1/2 h-64 md:h-96">

      </div>
      <div class="w-full md:w-1/2">
        <p class="text-lg text-justify" ref="paragraphRef">
          <span class="block mb-3">
            Links escorts & Tracking is a specialist Escort and logistics service provider operating across Central, East and Southern Africa.
          </span>
          <span class="block">
            Founded by an experienced team of logistics, Haulier and Security professionals with touch pan-African secret service experience; the company caters for the increasing need in logistics, transport tracking & support services by haulage companies when carrying a variety of high value goods across the African continent.
          </span>
        </p>
      </div>
    </div>
  </div>
</template>