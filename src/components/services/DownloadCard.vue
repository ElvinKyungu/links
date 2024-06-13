<template>
  <div :class="`p-7 flex justify-center  items-center flex-col gap-4 ${bgColor}`">
    <h1 class="text-2xl font-bold text-center">{{ title }}</h1>
    <a :href="pdfPath" download class="flex gap-2 items-center bg-secondary text-white p-3 rounded-md">
      <IconDownload />
      <span>Download</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import IconDownload from '../icons/IconDownload.vue'
import { defineProps } from 'vue'

interface Props {
  title: string;
  pdfPath: string;
  bgColor: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
</style>
