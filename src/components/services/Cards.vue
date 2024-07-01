<script setup lang="ts">
import { defineProps } from 'vue'
import IconRight from '../icons/IconRight.vue'
import SvgEscort from '@/components/svg/SvgEscort.vue'
import SvgHub from '@/components/svg/SvgHub.vue'
import SvgLogistic from '@/components/svg/SvgLogistic.vue'
import SvgMonitoring from '@/components/svg/SvgMonitoring.vue'
import SvgSupply from '@/components/svg/SvgSupply.vue'
import SvgTrackingService from '@/components/svg/SvgTrackingService.vue'
import SvgTracking from '@/components/svg/SvgTracking.vue'
import SvgTransport from '@/components/svg/SvgTransport.vue'

interface Props {
  title: string;
  titleColor: string;
  bgColor: string;
  cardUrl: string;
  iconComponent: string; 
}

defineProps<Props>()

const components: Record<string, any> = {
  SvgEscort,
  SvgHub,
  SvgLogistic,
  SvgMonitoring,
  SvgSupply,
  SvgTrackingService,
  SvgTransport,
  SvgTracking
}
</script>

<template>
  <div class="flex flex-col bg-white shadow-2xl px-7 py-10">
    <router-link :to="cardUrl" class="group">
      <div class="flex flex-col gap-4">
        <component :is="components[iconComponent]" class="svg-services w-40 h-20 fill-secondary group-hover:fill-primary transition"/>
        <h1 class="text-xl transition font-bold group-hover:text-primary">{{ title }}</h1>
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

<style scoped>

</style>
