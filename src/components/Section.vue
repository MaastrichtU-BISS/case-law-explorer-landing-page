<template>
  <h2>{{ props.title }}</h2>
  <p class="mt-4 text-lg">{{ props.text }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  text: string;
}>();
</script>
