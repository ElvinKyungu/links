
<script setup lang="ts">
  import IconRightService from '../components/icons/IconRightService.vue';
</script>
<template>
  <section class="flex justify-between w-full relative gap-6 mt-20 px-40">
    <div class="w-full">
      <h3 class="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Discover our</h3>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mt-4">Transports services</h1>
      <p class="text-xl mt-10">
        Sed gravida consequat orci in ullamcorper. Vivamus nec hendrerit quam. Nulla turpis risus, lobortis at dolor vitae, molestie congue enim. Proin gravida arcu sit amet auctor varius.
      </p>
      <ul class="mt-5 flex flex-col gap-4 text-xl">
        <li class="flex gap-3 items-center">
          <span class="w-5 h-5 rounded-full bg-primary"</span>
          <span>
            Local & International multi-mode transportation
          </span>
        </li>
        <li class="flex gap-3 items-center">
          <span class="w-5 h-5 rounded-full bg-primary"</span>
          <span>
            Freight
          </span>
        </li>
        <li class="flex gap-3 items-center">
          <span class="w-5 h-5 rounded-full bg-primary"</span>
          <span>
            Transport of hazardous materials
          </span>
        </li>
        <li class="flex gap-3 items-center">
          <span class="w-5 h-5 rounded-full bg-primary"</span>
          <span>
            optimization
          </span>
        </li>
      </ul>
    </div>
    <div class="w-full bg-gray-100 px-7 py-10 rounded-lg">
      <h2
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary mt-4"
      >
        Other Services
      </h2>
      <div class="h-3 w-1/5 bg-primary"></div>
      <div></div>
      <ul class=" flex flex-col gap-3 text-xl mt-5 font-medium">
        <li class="flex items-center gap-3 text-primary">
          <IconRightService/>
          <span>Logistics Solutions</span>
        </li>
        <li class="flex items-center gap-3">
          <IconRightService/>
          <span>Supply Chain Management</span>
        </li>
        <li class="flex items-center gap-3">
          <IconRightService/>
          <span>Operations management</span>
        </li>
        <li class="flex items-center gap-3">
          <IconRightService/>
          <span>Escorts & Tracking</span>
        </li>
        <li class="flex items-center gap-3">
          <IconRightService/>
          <span>Monitoring</span>
        </li>
        <li class="flex items-center gap-3">
          <IconRightService/>
          <span>Escorts experts managers</span>
        </li>
        <li class="flex items-center gap-3">
          <IconRightService/>
          <span>Operations management</span>
        </li>
      </ul>
    </div>
  </section>
</template>