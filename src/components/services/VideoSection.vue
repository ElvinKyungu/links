<template>
  <section class="grid grid-cols-1 md:grid-cols-2">
    <div class="bg-gray-200 flex flex-col justify-center py-10 px-10 md:px-14 lg:px-28">
      <h1 class="text-secondary text-2xl md:3xl lg:text-6xl font-semibold my-5">
        We are always getting extra miles to serve you better.
      </h1>
      <p class="text-xl mt-5">
        Our customers are at the heart of our business, that’s why we will always be getting extra miles to serve our customers even better.
      </p>
      <div>
        <button class="bg-secondary text-white mt-10 p-2 md:text-lg md:p-3 rounded-md">
          Get In Touch With Us
        </button>
      </div>
    </div>
    <div class="relative video-container">
      <div
        @click="playVideo"
        class="video-thumbnail w-full h-full bg-cover bg-center cursor-pointer relative flex justify-center items-center"
        :style="{ backgroundImage: `url(${backgroundVideo})` }"
      >
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full p-4 bg-white/40 transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <div
            class="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 bg-white transition-transform duration-300 ease-in-out hover:scale-125"
          >
            <svg class="w-16 h-16 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <VideoModal v-if="showModal" :videoId="videoId" @close="showModal = false"/>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import backgroundVideo from '/bg-1.jpg'
import VideoModal from '@/components/services/VideoModal.vue'

const showThumbnail = ref(true)
const showModal = ref(false)
const videoId = 'h4Fil8_7M9g'

const playVideo = () => {
  showThumbnail.value = false
  showModal.value = true
}
</script>

<style>
.video-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
}
.video-container iframe,
.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.play-button svg {
  transition: transform 0.3s ease;
}
.play-button:hover svg {
  transform: scale(1.1);
}
</style>
