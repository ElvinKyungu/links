<script setup lang="ts">
import { useGsapAnimation } from '@/composables/useGsapAnimation'

const firstParagraphRef = useGsapAnimation(-50, 1, 0)
const seconParagraphRef = useGsapAnimation(150, 1, 0)
</script>

<template>
  <div class="mx-10 md:mx-20 lg:mx-40 my-20">
    <div class="grid col-span-1 md:flex justify-between w-full gap-6 my-10">
      <div class="w-full md:w-1/2">
        <p class="text-lg text-justify">
          <span class="block mb-3" ref="firstParagraphRef">
            Links escorts & Tracking is a specialist Escort and logistics service provider operating across Central, East and Southern Africa.
          </span>
          <span class="block" ref="seconParagraphRef">
            Founded by an experienced team of logistics, Haulier and Security professionals with touch pan-African secret service experience; the company caters for the increasing need in logistics, transport tracking & support services by haulage companies when carrying a variety of high value goods across the African continent.
          </span>
        </p>
      </div>
      <div class="bg-[#D9D9D9] rounded-md w-full md:w-1/2 h-64 md:h-96">

      </div>
    </div>
  </div>
</template>