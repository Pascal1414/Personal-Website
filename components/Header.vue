<template>
  <header>
    <nav
      class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/favicon.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Portfolio</span
          >
        </a>
        <div class="flex gap-5">
          <ThemeToggleButton class="md:hidden" />

          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <ClientOnly>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </ClientOnly>
          </button>
        </div>
        <div class="hidden w-full md:w-auto md:flex flex-row gap-7" id="navbar-solid-bg">
          <ThemeToggleButton class="hidden md:flex" />
          <ul
            class="flex md:items-center flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <li v-for="(navItem, index) in navItems">
              <a
                v-if="index == 0"
                :href="navItem.href"
                class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
                >{{ navItem.name }}</a
              >
              <a
                v-else
                :href="navItem.href"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >{{ navItem.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
#navbar {
  opacity: 0;
  transform: translateY(-100%);
  transition: all 1s;
}

.navbar-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
<script setup>
const navItems = ref([
  { name: 'About', href: '#about' },
  { name: 'Technologien', href: '#technologies' },
  { name: 'Schule', href: '#schools' },
  { name: 'Repositories', href: '#repositories' }
])

onMounted(() => {
  setTimeout(() => {
    document.getElementById('navbar').classList.add('navbar-visible')
  }, 1000)
})
</script>
