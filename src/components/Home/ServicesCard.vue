<script setup lang="ts">
  import Escort from '@/assets/icons/tracking-services.svg'
  import Logistic from '@/assets/icons/hub.svg'
  import BtnPrimary from '../base/BtnPrimary.vue'
  import { useGsapAnimation } from '@/composables/useGsapAnimation'

  const logisticTitleRef = useGsapAnimation(-50, 1, 0)
  const logisticParagraphRef = useGsapAnimation(50, 1, 0.5)
  const escortTitleRef = useGsapAnimation(-50, 1, 0)
  const escortParagraphRef = useGsapAnimation(50, 1, 0.5)
</script>
<template>
  <div class="grid colspan-1 md:flex px-10 md:px-16 lg:px-40 -mt-20">
    <div 
      class="
        grid col-span-1 md:flex md:justify-between 
        md:items-start bg-[#D9D9D9] p-10 gap-6

      "
    >
      <div class="flex items-center gap-2">
        <img :src="Logistic" class="w-10 md:w-56" alt="">
        <h2 
          class="text-secondary text-3xl font-semibold mb-5 block md:hidden mt-8"
          ref="logisticTitleRef"
        >
          Logistics Solutions
        </h2>
      </div>
      <div>
        <h2 ref="logisticTitleRef" class="text-secondary text-4xl font-semibold mb-5 hidden md:flex">Logistics Solutions</h2>
        <p class="text-lg mb-5" ref="logisticParagraphRef">
          Links provides a wide range of options for moving your freight 
          efficiently, including air, ocean, and land transportation. 
          We handle everything from single packages to complex multi-modal
          shipments, ensuring your cargo arrives on time and within budget.
        </p>
        <router-link to="/services">
          <BtnPrimary text="Discover More" />
        </router-link>
      </div>
    </div>
    <div 
      class="
        grid col-span-1 md:flex md:justify-between md:items-start bg-secondary 
        p-10 gap-6
      "
    >
      <div class="flex items-center gap-2">
        <img :src="Escort" class="w-10 md:w-56" alt="">
        <h2 
          class="
            text-primary text-3xl font-semibold mb-5 block md:hidden mt-8
          "
          ref="escortTitleRef"
        >
          Logistics Solutions
        </h2>
      </div>
      <div>
        <h2 
          class="
            text-primary text-4xl font-semibold mb-5 hidden md:flex
          "
          ref="escortTitleRef"
        >
          Escort & Tracking
        </h2>
        <p class="text-lg mb-5 text-white" ref="escortParagraphRef">
          Links provides a team of experienced and licensed professionals 
          to ensure the safe and secure transport of your high-value or 
          sensitive goods. Our escort services offer real-time monitoring 
          and intervention capabilities, giving you complete peace of mind.
        </p>
        <router-link to="/escorts">
          <BtnPrimary text="Discover More" />
        </router-link>
      </div>
    </div>
  </div>
</template>