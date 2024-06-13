<script setup lang="ts">
  import CardComponent from '@/components/services/Cards.vue'
  import transport from '@/assets/icons/transport.svg'
</script>
<template>
  <section class="mx-10 md:mx-16 lg:mx-32 mt-28 mb-10">
    <h1 class="text-secondary text-center mb-5 text-3xl md:4xl lg:text-6xl font-bold">
      We provide
    </h1>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CardComponent
        :imgSrc="transport"
        title="Transport Services"
        titleColor="text-primary"
        bgColor="bg-primary"
      />
      <CardComponent
        :imgSrc="transport"
        title="Transport Services"
        titleColor="text-secondary"
        bgColor="bg-secondary"
      />
      <CardComponent
        :imgSrc="transport"
        title="Transport Services"
        titleColor="text-secondary"
        bgColor="bg-secondary"
      />
      <CardComponent
        :imgSrc="transport"
        title="Transport Services"
        titleColor="text-secondary"
        bgColor="bg-secondary"
      />
    </div>
  </section>
</template>