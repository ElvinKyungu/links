<script setup lang="ts">
  import HeaderService from '@/components/services/HeaderService.vue'
  import DownloadCards from '@/components/services/DownloadCards.vue'
  import Footer from '@/components/base/Footer.vue'
  import Transport from '@/views/ServicesTransport.vue'
</script>

<template>
  <HeaderService />
  <Transport />
  <DownloadCards />
  <Footer />
</template>