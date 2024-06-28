<script setup lang="ts">
import { defineProps } from 'vue'
import IconRight from '../icons/IconRight.vue'

interface Props {
  imgSrc: string;
  title: string;
  titleColor: string;
  bgColor: string;
  cardUrl: String
}

defineProps<Props>()
</script>
<template>
  <div class="flex flex-col bg-white shadow-2xl px-7 py-10">
    <router-link :to="cardUrl">
      <div class="flex flex-col gap-4">
        <img :src="imgSrc" class="w-40 h-20" alt="">
        <h1 :class="`text-xl font-bold ${titleColor}`">{{ title }}</h1>
      </div>
      <p class="text-lg my-4 pb-5 border-b border-gray-300">
        Sed gravida consequat orci in ullamcorper. Vivamus nec hendrerit quam. Nulla turpis risus, lobortis at dolor vitae, molestie congue enim. Proin gravida arcu sit amet auctor varius.
      </p>
      <div class="flex items-center gap-4">
        <span :class="`block rounded-full p-2 ${bgColor}`">
          <IconRight class="text-white"/>
        </span>
        <span class="text-lg">Explore</span>
      </div>
    </router-link>
  </div>
</template>