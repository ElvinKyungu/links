<script setup lang="ts">
  const props = defineProps(['text'])
</script>

<template>
  <button class="bg-primary text-secondary p-3 rounded-md">
    {{ props.text }}
  </button>
</template>