<script setup lang="ts">
  import DownloadSection from '@/components/services/DownloadCard.vue'
  import OperatingProcedure from '@/assets/pdf/operating-procedure.pdf'
  import WorkingProcedure from '@/assets/pdf/working-procedure.pdf'
  import ProfileCompany from '@/assets/pdf/logistics-company.pdf'
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-28">
    <div class="bg-[#7FCE09] px-7 py-12">
      <h1 class="text-secondary text-xl font-semibold md:text-2xl ">
        Need to know more about our company policy and standards ?
      </h1>
      <h3 class="mt-4 text-lg md:text-xl text-white ">
        Here are some of our important resources.
      </h3>
    </div>
    <DownloadSection 
      title="Our Standard Operating Procedures." 
      :pdfPath="OperatingProcedure"
      bgColor="bg-[#C2F970]"
    />
    <DownloadSection 
      title="Our Working Procedures." 
      :pdfPath="WorkingProcedure"
      bgColor="bg-[#BFE980]"
    />
    <DownloadSection 
      title="Our Company Profiles." 
      :pdfPath="ProfileCompany"
      bgColor="bg-[#BCDA8F]"
    />
  </div>
</template>