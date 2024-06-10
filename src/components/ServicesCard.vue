<script setup lang="ts">
  import IconLogistic from '@/assets/icons/logistical-support.svg'
  import BtnPrimary from './BtnPrimary.vue'
</script>
<template>
  <div class="flex lg:px-40 -mt-20">
    <div class="flex justify-between items-start bg-[#D9D9D9] p-10 gap-6">
      <div>
        <img :src="IconLogistic" class="w-56" alt="">
      </div>
      <div>
        <h2 class="text-secondary text-4xl font-semibold mb-5">Logistics Solutions</h2>
        <p class="text-lg mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus augue a nisi tincidunt pellentesque. Etiam ipsum sem, porta in ornare vel, blandit vel leo. Donec id tempus magna, eu porttitor leo. Vivamus eu feugiat nisi. Proin ut tellus et est semper rutrum. Sed dolor ipsum, congue iaculis convallis eu, condimentum non ex.
        </p>
        <BtnPrimary text="Discover More" />
      </div>
    </div>
    <div class="flex justify-between items-start bg-secondary p-10 gap-6">
      <div>
        <img :src="IconLogistic" class="w-56" alt="">
      </div>
      <div>
        <h2 class="text-primary text-4xl font-semibold mb-5">Logistics Solutions</h2>
        <p class="text-lg mb-5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus augue a nisi tincidunt pellentesque. Etiam ipsum sem, porta in ornare vel, blandit vel leo. Donec id tempus magna, eu porttitor leo. Vivamus eu feugiat nisi. Proin ut tellus et est semper rutrum. Sed dolor ipsum, congue iaculis convallis eu, condimentum non ex.
        </p>
        <BtnPrimary text="Discover More" />
      </div>
    </div>
  </div>
</template>