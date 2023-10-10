<template>
  <h2 class="mt-12 text-3xl font-bold">{{ props.title }}</h2>
  <p class="mt-4">{{ props.text }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  text: string;
}>();
</script>
