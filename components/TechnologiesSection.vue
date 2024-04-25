<template>
  <section id="technologies">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24">
      <div class="flex mb-4 lg:mb-16 gap-20 lg:gap-80 items-center">
        <div>
          <h2
            class="mb-2 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl"
          >
            Mit was ich arbeite
          </h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
            Wärend meiner Ausbildung habe ich mit verschiedenen Technologien und Programmen
            gearbeitet. Mit den folgenden Technologien habe ich die meisten Erfahrungen gesammelt.
          </p>
        </div>
        <ClientOnly>
          <svg
            class="mr-12 hidden md:block"
            width="425"
            height="250"
            viewBox="0 0 794 453"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M180.33 134.172L47 238.878L180.33 361.034M613.67 134.172L747 238.878L613.67 361.034M509 48L400 405"
              stroke="#1c64f2"
              stroke-width="94"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ClientOnly>
      </div>
      <div class="mb-12">
        <h2 class="text-gray-900 dark:text-gray-200 text-xl font-extrabold mb-2.5">
          Programmiersprachen und Frameworks
        </h2>
        <div class="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0">
          <Technology v-for="technology in programmingLanguages" :technology="technology" />
        </div>
      </div>
      <div class="mb-12">
        <h2 class="text-gray-900 dark:text-gray-200 text-xl font-extrabold mb-2.5">
          Entwicklungsumgebungen
        </h2>
        <div class="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0">
          <Technology v-for="technology in ides" :technology="technology" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { TechType, type Technology } from '~/types/Technology'

const programmingLanguages: Ref<Technology[]> = ref([])
const ides: Ref<Technology[]> = ref([])

await useFetch('/api/technologies', {
  transform: (data) => {
    programmingLanguages.value = data.filter(
      (technology: Technology) => technology.type === TechType.ProgrammingLanguage
    )
    ides.value = data.filter((technology: Technology) => technology.type === TechType.IDE)
  }
})
</script>

<style></style>
