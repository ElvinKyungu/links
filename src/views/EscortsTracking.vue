<script setup lang="ts">
  import HeaderService from '@/components/services/HeaderService.vue'
  import Footer from '@/components/base/Footer.vue'
  import EscortsCards from '@/components/services/EscortsCards.vue'
  import VideoSection from '@/components/services/VideoSection.vue'
  import EscortAbout from '@/components/services/EscortAbout.vue'
</script>

<template>
  <HeaderService service-name=""/>
  <EscortAbout />
  <EscortsCards />
  <VideoSection />
  <Footer />
</template>
