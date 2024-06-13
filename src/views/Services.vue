<script setup lang="ts">
  import HeaderService from '@/components/services/HeaderService.vue'
  import Footer from '@/components/base/Footer.vue'
  import ServicesAbout from '@/components/services/ServicesAbout.vue'
  import ServicesCards from '@/components/services/ServicesCards.vue'
  import DownloadCards from '@/components/services/DownloadCards.vue'
  import VideoSection from '@/components/services/VideoSection.vue'
</script>

<template>
  <HeaderService />
  <ServicesAbout />
  <ServicesCards />
  <DownloadCards />
  <VideoSection />
  <Footer />
</template>
