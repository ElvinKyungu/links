<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/logo_white.png'
import IconHumberger from '@/components/icons/IconHumberger.vue'
import IconClose from '@/components/icons/IconClose.vue'
import BtnPrimary from '@/components/base/BtnPrimary.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="flex justify-between border-b text-white items-center py-4 px-10 md:px-10 lg:px-20">
    <router-link to="/">
      <img :src="logo" class="w-32 md:w-40" alt="Logo">
    </router-link>
    <div class="flex md:hidden cursor-pointer" @click="toggleMenu">
      <IconHumberger v-if="!isMenuOpen" />
    </div>
    <ul class="hidden md:flex gap-4 md:gap-5 lg:gap-6 items-center text-xl">
      <li class="hover:text-primary">
        <router-link to="/" active-class="text-primary border-b border-primary transition">Home</router-link>
      </li>
      <li class="hover:text-primary">
        <router-link to="/services" active-class="text-primary border-b border-primary transition">Logistics & Solution</router-link>
      </li>
      <li class="hover:text-primary">
        <router-link to="/escorts" active-class="text-primary border-b border-primary transition">Escort & Tracking</router-link>
      </li>
      <li class="hover:text-primary">
        <router-link to="/">
          <BtnPrimary text="Contact Us"/>
        </router-link>
      </li>
    </ul>
  </nav>

  <!-- Menu mobile avec animation -->
  <transition name="slide-fade">
    <div v-if="isMenuOpen" class="fixed top-0 left-0 h-full z-50 flex flex-col items-start p-10">
      <div @click="toggleMenu" class="fixed top-0 left-0 w-full h-screen bg-black/40 z-0"></div>
      <nav class="top-0 left-0 h-screen bg-secondary bg-opacity-90 fixed  w-3/4 p-5">
        <div class="flex justify-between">
          <router-link to="/">
            <img :src="logo" class="w-32 md:w-40" alt="Logo">
          </router-link>
          <div class="flex md:hidden cursor-pointer" @click="toggleMenu">
            <IconClose v-if="isMenuOpen" class="text-white" />
          </div>
        </div>
        <ul class="flex flex-col gap-6 text-xl text-white mt-10">
          <li @click="toggleMenu">
            <router-link to="/" active-class="text-primary font-bold">Home</router-link>
          </li>
          <li @click="toggleMenu">
            <router-link to="/services" active-class="text-primary font-bold">Logistics & Solution</router-link>
          </li>
          <li @click="toggleMenu">
            <router-link to="/escorts" active-class="text-primary font-bold">Escort & Tracking</router-link>
          </li>
          <li @click="toggleMenu">
            <router-link to="/" active-class="text-primary font-bold">
              <BtnPrimary text="Contact Us"/>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<style scoped>

</style>
