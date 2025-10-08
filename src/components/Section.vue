<template>
  <h3>{{ title }}</h3>
  <template v-if="Array.isArray(text)">
    <template v-for="item in text">
      <p class="mt-2 text-lg" v-html="item"></p>
    </template>
  </template>
  <p v-else class="mt-2 text-lg" v-html="text"></p>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  title: string;
  text: string | string[];
}>();

const { title, text } = toRefs(props);
</script>
