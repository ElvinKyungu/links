<script setup lang="ts">
  import CardComponent from '@/components/services/Cards.vue'
  import Tracking from '@/assets/icons/tracking.svg'
  import EscortsManager from '@/assets/icons/escorts.svg'
  import Logisticak from '@/assets/icons/logistical-support.svg'
  import Monitoring from '@/assets/icons/monitoring.svg'
</script>
<template>
  <section class="mx-10 md:mx-16 lg:mx-32 mt-28 mb-10">
    <h1 class="text-secondary text-center mb-5 text-3xl md:4xl lg:text-6xl font-bold">
      We provide
    </h1>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CardComponent
        :imgSrc="Tracking"
        title="Transport Services"
        titleColor="text-primary"
        bgColor="bg-primary"
      />
      <CardComponent
        :imgSrc="EscortsManager"
        title="Logistics Solution"
        titleColor="text-secondary"
        bgColor="bg-secondary"
      />
      <CardComponent
        :imgSrc="Logisticak"
        title="Supply Chain management"
        titleColor="text-secondary"
        bgColor="bg-secondary"
      />
      <CardComponent
        :imgSrc="Monitoring"
        title="Operations management"
        titleColor="text-secondary"
        bgColor="bg-secondary"
      />
    </div>
  </section>
</template>