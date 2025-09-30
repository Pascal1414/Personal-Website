<template>
  <button @click="openModal">
    <div
      class="h-full text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
    >
      <div class="p-4 h-full">
        <div class="flex">
          <div class="me-3 shrink-0">
            <div class="p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
              <img class="w-8 h-8 rounded-full" :src="technology.icon" />
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div class="text-start">
              <p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
                {{ technology.title }}
              </p>
              <p class="mb-3 text-sm font-normal">Programming Language TODO</p>
              <p class="mb-4 text-sm">{{ technology.shortDescription }}</p>
            </div>
            <div class="flex" v-if="technology.link != null">
              <a
                type="button"
                :href="technology.link"
                class="inline-flex items-center justify-center w-full px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <Icon name="mdi:world" class="w-[20px] h-[20px] me-2" />
                Open Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </button>

  <!-- Main modal -->
  <div
    ref="modal"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <div class="flex items-center gap-5">
            <img :src="technology.icon" alt="technology.title" class="w-9 h-9 mx-auto" />

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ technology.title }}
            </h3>
          </div>

          <button
            @click="closeModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {{ technology.description }}
          </p>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <a
            v-bind:href="technology.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            v-if="technology.link"
          >
            Website öffnen
            <Icon name="material-symbols:link-rounded" class="w-5 h-5 ms-2 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Technology from '~/types/Technology'
import { Modal } from 'flowbite'

const props = defineProps<{
  technology: Technology
}>()
const modal = ref<HTMLElement | null>(null)
let modalObj: Modal | null = null

onMounted(() => {
  if (modal.value !== null) modalObj = new Modal(modal.value)
})

const openModal = () => {
  if (modalObj !== null) modalObj.show()
}
const closeModal = () => {
  if (modalObj !== null) modalObj.hide()
}
</script>

<style scoped></style>
