<script setup lang="ts">
  import CardComponent from '@/components/services/Cards.vue'
  import { useGsapAnimation } from '@/composables/useGsapAnimation'

  const titleRef = useGsapAnimation(100, 1, 0)
</script>
<template>
  <section class="mx-10 md:mx-16 lg:mx-32 mt-28 mb-10">
    <h1 ref="titleRef" class="text-secondary text-center mb-5 text-3xl md:4xl lg:text-6xl font-bold">
      We provide
    </h1>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CardComponent
        title="Transport Services"
        titleColor="text-primary"
        bgColor="bg-primary"
        cardUrl="/service/transport"
        iconComponent="SvgTransport"
        paragraph="We  provide a comprehensive suite of services designed to optimize your logistics. We manage routes, schedules, and resources, ensuring on-time deliveries, minimized costs, and seamless communication."
      />
      <CardComponent
        title="Logistics Solution"
        titleColor="text-secondary"
        bgColor="bg-secondary"
        cardUrl="/service/logistic"
        iconComponent="SvgLogistic"
        paragraph="We are your one-stop shop for streamlined logistics solutions.  We'll take the wheel, ensuring your products get where they need to be, on time and hassle-free."
      />
      <CardComponent
        title="Supply Chain management"
        titleColor="text-secondary"
        bgColor="bg-secondary"
        cardUrl="/service/supply"
        iconComponent="SvgSupply"
        paragraph="We understand the importance of a robust and optimized supply chain. Our team of experienced professionals works closely with you to identify bottlenecks, streamline processes, and implement data-driven solutions."
      />
      <CardComponent
        title="Operations management"
        titleColor="text-secondary"
        bgColor="bg-secondary"
        cardUrl="/service/operation"
        iconComponent="SvgTransport"
        paragraph="We offer a team of seasoned operations management professionals dedicated to streamlining your processes and maximizing your efficiency."
      />
    </div>
  </section>
</template>