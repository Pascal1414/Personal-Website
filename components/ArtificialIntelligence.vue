<template>
  <div
    class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Arbeiten mit KI</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
      Auch wenn ich gerne ohne KI-Hilfen programmiere, ist es für mich dennoch wichtig, solche Tools
      zu effizient nutzen zu können. In der heutigen, schnelllebigen Programmierwelt ist es für
      Entwickler wichtig, sich ständig auf neue Technologien einzulassen. Besonders bei sich
      wiederholenden Aufgaben oder bei der Suche nach Lösungen für Probleme greife ich auf KI-Tools
      zurück.
    </p>
    <div
      class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse"
    >
      <div
        v-for="tool in tools"
        class="w-full sm:w-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-5">
          <div class="flex justify-center">
            <img class="rounded-t-lg" :src="tool.image" alt="" />
          </div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ tool.title }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ tool.description }}
          </p>
          <a
            :href="tool.link"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: tools } = await useFetch('/api/ai-tools')
</script>

<style></style>
