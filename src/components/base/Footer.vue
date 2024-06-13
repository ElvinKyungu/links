<script setup lang="ts">
  import logo from '@/assets/logo_white.png'
  import IconCall from '../icons/IconCall.vue'
  import IconMail from '../icons/IconMail.vue'
</script>
<template>
  <footer class="bg-secondary">
    <div class="grid col-span-1 md:flex items-center px-10 md:px-20 lg:px-40 py-10 gap-10 border-b">
      <div class="flex flex-col lg:w-1/3">
        <img :src="logo" class="w-56" alt="">
        <p class="text-lg text-white">
          We Provide a wide range of Logistics, Escort & Tracking Services for 
          several companies.
        </p>
      </div>
      <nav class="grid col-span-1 md:flex justify-between gap-10 w-full">
        <ul class="text-[#E3E3E3]">
          <li class="text-primary text-lg font-semibold mb-2">Useful links</li>
          <li>Logistics Solutions</li>
          <li>Escort & Tracking</li>
          <li>Contact</li>
        </ul>
        <ul class="text-white">
          <li class="text-primary text-lg font-semibold mb-2">Our offices</li>
          <li class="text-[#cecdcd] mb-2">Head Office DRC</li>
          <li class="mb-2">
            Plot No. 2 George Arthur Forrest,<br> 
            Makutano Area, Lubumbashi City 
          </li>
          <hr>
          <li class="text-[#cecdcd] my-2">Head Office Zambia</li>
          <li>
            Plot No. 05 Audio vision building <br> 
            Obote Av, P.O. Box 10101, Kitwe Zambia 
          </li>
        </ul>
        <ul class="text-[#E3E3E3] text-lg flex flex-col gap-3">
          <li class="text-primary text-lg font-semibold mb-2">Contact</li>
          <li class="flex items-center gap-4">
            <IconCall class="text-primary"/>
            <span>+243 975 543 617</span>
          </li>
          <li class="flex items-center gap-4">
            <IconCall class="text-primary"/>
            <span>+260 960 778 799</span>
          </li>
          <li class="flex items-center gap-4">
            <div class="border-primary p-1">
              <IconMail class="text-primary"/>
            </div>
            <span>sales@linkslogistics.co.za</span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex justify-between text-white px-10 md:px-20 lg:px-40 py-10">
      <div>
        <h3 class="text-lg font-semibold">Resources</h3>
        <ul class="grid col-2 md:flex gap-6 mt-3">
          <li>Logistics Solutions Profile</li>
          <li>Escort & Tracking Profile</li>
          <li>Links SOP</li>
          <li>Links Working Procedure</li>
        </ul>
      </div>
      <div>
        <h5>Follow us on</h5>
        linkedin
      </div>
    </div>
  </footer>
</template>