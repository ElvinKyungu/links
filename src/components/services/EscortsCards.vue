<script setup lang="ts">
import CardComponent from '@/components/services/Cards.vue'
</script>

<template>
  <section class="mx-10 md:mx-16 lg:mx-32 mt-28 mb-10">
    <h1 class="text-secondary text-center mb-5 text-3xl md:text-4xl lg:text-6xl font-bold">
      We provide
    </h1>
    <div class="flex justify-center">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <CardComponent
          title="Escorts & Tracking"
          titleColor="text-primary"
          bgColor="bg-primary"
          cardUrl="/service/escorts-tracking"
          iconComponent="SvgTracking"
        />
        <CardComponent
          title="Monitoring"
          titleColor="text-secondary"
          bgColor="bg-secondary"
          cardUrl="/service/monitoring"
          iconComponent="SvgMonitoring"
        />
        <CardComponent
          title="Escots Experts Managers"
          titleColor="text-secondary"
          bgColor="bg-secondary"
          cardUrl="/service/escorts-experts"
          iconComponent="SvgEscort"
        />
      </div>
    </div>
  </section>
</template>
