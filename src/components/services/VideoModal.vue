<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
    <div class="relative w-4/5 h-4/5">
      <iframe
        ref="videoRef"
        :src="videoEmbedUrl"
        class="w-full h-full"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <button @click="closeModal" class="absolute top-2 right-2 text-white text-2xl">
        &times;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from 'vue'
import { useMediaControls } from '@vueuse/core'

const props = defineProps<{ videoId: string }>()
const emit = defineEmits(['close'])

const videoRef = ref<HTMLIFrameElement | null>(null)
const videoEmbedUrl = `https://www.youtube.com/embed/${props.videoId}?autoplay=1&controls=1`

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
</style>
