<template>
  <a
    href="#"
    class="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
  >
    <img :src="technology.icon" alt="technology.title" class="w-12 h-12 mx-auto" />
    <h3 class="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
      {{ technology.title }}
    </h3>
  </a>
</template>

<script lang="ts" setup>
import type { Technology } from '~/types/Technology'

const props = defineProps<{
  technology: Technology
}>()
</script>

<style></style>
