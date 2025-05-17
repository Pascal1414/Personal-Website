<template>
  <section id="technologies" class="scroll-hidden-section">
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
      </div>
      <div class="mb-12">
        <h2 class="text-gray-900 dark:text-gray-200 text-2xl font-extrabold">
          Programmiersprachen und Frameworks
        </h2>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl mb-3">
          Mit diesen Technologien habe ich die meiste Erfahrung.
        </p>
        <div
          class="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0"
        >
          <Technology v-for="technology in primaryTechnologies" :technology="technology" />
        </div>
      </div>
      <div class="mb-12">
        <h2 class="text-gray-900 dark:text-gray-200 text-2xl font-extrabold">
          Weitere Programmiersprachen und Frameworks
        </h2>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl mb-3">
          Die folgenden Technologien habe ebenfalls immer wider verwendet. Wärend der Berufsschule
          als auch in private Projekten habe ich mit weiteren Technologien gearbeitet. Aufgelistet
          sind nur die wichtigsten und die von mir meist verwendetsten.
        </p>
        <div
          class="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0"
        >
          <Technology v-for="technology in secondaryTechnologies" :technology="technology" />
        </div>
      </div>
      <div class="mb-12">
        <h2 class="text-gray-900 dark:text-gray-200 text-2xl font-extrabold">
          Entwicklungsumgebungen
        </h2>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl mb-3">
          Um die Projekte umzusetzen habe ich verschiedene Entwicklungsumgebungen verwendet. Am
          häufigsten jedoch die folgenden.
        </p>
        <div
          class="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0"
        >
          <Technology v-for="environment in environments" :technology="environment" />
        </div>
      </div>
      <ArtificialIntelligence class="pt-16" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type Technology from '~/types/Technology'
import ArtificialIntelligence from './ArtificialIntelligence.vue'

const primaryTechnologies: Ref<Technology[]> = ref([])
const secondaryTechnologies: Ref<Technology[]> = ref([])

await useFetch('/api/technologies', {
  transform: (data) => {
    primaryTechnologies.value = data.filter((pl) => pl.weight <= 1)
    secondaryTechnologies.value = data.filter((pl) => pl.weight > 1)
  }
})

const { data: environments } = await useFetch('/api/environments')

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-show')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.scroll-hidden-section')
  hiddenElements.forEach((element) => {
    observer.observe(element)
    element.addEventListener('transitionend', () => {
      /* Reset the filter and transform properties
      to prevent a new stacking context that would 
      disturb the modal from Technology.vue. The 
      modal is still not working properly when 
      the transition is still ongoing. */

      element.style.filter = 'none'
      element.style.transform = 'none'
    })
  })
})
</script>

<style scoped>
.scroll-hidden-section {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(100px);
  transition: all 1s;
}

.scroll-show {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

@media (prefer-reduces-motion) {
  .scroll-hidden-section {
    transition: none;
  }
}
</style>
