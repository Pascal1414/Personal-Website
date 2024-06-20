
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import "assets/css/main.css";

useSeoMeta({
  title: 'Personal Portfolio',
  ogTitle: 'Personal Portfolio',
  description:
    'Hallo, mein Name ist Pascal. Ich bin ein Applikationsentwickler im 3. Lehrhjahr. Besuchen Sie meine Webseite und erfahren Sie mehr über mich.',
  ogDescription:
    'Hallo, mein Name ist Pascal. Ich bin ein Applikationsentwickler im 3. Lehrhjahr. Besuchen Sie meine Webseite und erfahren Sie mehr über mich.'
})
</script>
