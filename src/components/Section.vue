<template>
  <h2>{{ title }}</h2>
  <template v-if="Array.isArray(text)">
    <template v-for="item in text">
      <p class="mt-4 text-lg" v-html="item"></p>
    </template>
  </template>
  <p v-else class="mt-4 text-lg" v-html="text"></p>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  title: string;
  text: string | string[];
}>();

const { title, text } = toRefs(props);
</script>
